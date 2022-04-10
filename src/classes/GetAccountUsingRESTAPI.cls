/**
 * Created by akireyeu on 22.01.2020.
 */

global without sharing class GetAccountUsingRESTAPI {
    private final String clientId = '3MVG9G9pzCUSkzZv4_9.3dpOlnTXxGF2c7Hinfhk0PVs2O67MMO8t32C65HY.IgbxyJPHYBAur.ut.yc2Jwzp';
    private final String clientSecret = 'CE31BEBCAF0BA75651F65BACB105C1E0F8680C7D43B6C79A6F714EC90E0A0B4D';
    private final String username = '123@ak.com';
    private final String password = 'Mts2504007';


    public class deserializeResponse
    {
        public String id;
        public String access_token;
    }
    public String ReturnAccessToken (GetAccountUsingRESTAPI account)
    {
        String reqbody = 'grant_type=password&client_id='
                +clientId+'&client_secret='
                +clientSecret+'&username='
                +username+'&password='+password;
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setBody(reqbody);
        req.setMethod('POST');
        req.setEndpoint('https://login.salesforce.com/services/oauth2/token');
        HttpResponse res = h.send(req);
        //System.debug(res.getBody());
        deserializeResponse response = (deserializeResponse)JSON.deserialize(res.getBody(),deserializeResponse.class);
        //system.debug('@@@@access_token@@ '+response.access_token );
        return response.access_token;
    }
    public static List<Account> callGetAccount()
    {
        GetAccountUsingRESTAPI account1 = new GetAccountUsingRESTAPI();
        String accessToken;
        accessToken = account1.ReturnAccessToken(account1);
        //system.debug(' accessToken '+ accessToken);
        list<account> ListAccount=new List<account>();
        if(accessToken != null){
            //system.debug(' not null ');
            String endPoint = 'https://galsof-dev-ed.my.salesforce.com/services/apexrest/v1/getAccounts/';
            Http h2 = new Http();
            HttpRequest req1 = new HttpRequest();
            req1.setHeader('Authorization','Bearer ' + accessToken);
            req1.setHeader('Content-Type','application/json');
            req1.setHeader('accept','application/json');
            req1.setMethod('GET');
            req1.setEndpoint(endPoint);
            HttpResponse res1 = h2.send(req1);
            String trimmedResponse = res1.getBody().unescapeCsv().remove('\\');
            system.debug('@@@RESPONSE@@'+trimmedResponse);
            JSONParser parser = JSON.createParser(res1.getBody());
            set<account> accList=new set<account>();
            while (parser.nextToken() != null) {
                if((parser.getCurrentToken() == JSONToken.FIELD_NAME) ){
                    Account acc;
                    if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && (parser.getText() == 'Id')) {
                        parser.nextToken();
                        String sId= parser.getText();
                        acc=new Account();
                        acc.Id=sId;
                        //system.debug('Id@@@' + sId);
                        parser.nextToken();
                        if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) &&
                                (parser.getText() == 'Name')) {
                            parser.nextToken();
                            string sName= parser.getText();
                            acc.Name=sName;
                            //system.debug('Name@@@' + sName );
                        }
                    }
                    accList.add(acc);
                }
                accList.remove(null);
            }
            ListAccount.AddAll(accList);
            //system.debug('AccountList@@@@'+Json.serialize(ListAccount));
        }
        return ListAccount;
    }
    @future (callout = true)
    global static void createAccount(String n, String p, String w){
        String accName = n;
        String accPhone = p;
        String accWebsite = w;

        GetAccountUsingRESTAPI account2 = new GetAccountUsingRESTAPI();
        String Access_Token;
        Access_Token = account2.ReturnAccessToken(account2);
        if(Access_Token != null){
            HttpRequest req=new HttpRequest();
            String domainName='galsof-dev-ed.my.salesforce.com';
            String endPointURL='https://'+domainName+'/services/data/v47.0/sobjects/Account';
            req.setEndpoint(endPointURL);
            req.setHeader('Content-Type', 'application/xml; charset=utf-8');
            req.setBody('<?xml version="1.0" encoding="UTF-8" ?>' +
                    '<request>' +
                    '<name>'+accName+'</name>' +
                    '<phone>'+accPhone+'</phone>' +
                    '<website>'+accWebsite+'</website>' +
                    '</request>');
            req.setMethod('POST');
            req.setHeader('Authorization','Authorization: Bearer '+Access_Token);
            Http http = new Http();
            HTTPResponse res = http.send(req);
            System.debug('****************res.getStatusCode();'+res.getStatusCode());
            System.debug('****************res.getbody();'+res.getBody());
        }
    }
    @future (callout = true)
   global static void updateAccount(String n, String p, String w, String id){
        String accName = n;
        String accPhone = p;
        String accWebsite = w;
        String accountId = id;

        GetAccountUsingRESTAPI account = new GetAccountUsingRESTAPI();
        String Access_Token;
        Access_Token = account.ReturnAccessToken(account);
        if(Access_Token != null){
            HttpRequest req = new HttpRequest();
            String domainName='galsof-dev-ed.my.salesforce.com';
//            String endPointURL='https://'+domainName+'/services/apexrest/Accounts/0012v00002tcNWGAA2';
            String endPointURL='https://'+domainName+'/services/apexrest/Accounts/';
            System.debug(endPointURL);
            req.setEndpoint(endPointURL);
            req.setHeader('Content-Type', 'application/json; charset=utf-8');
//            req.setBody('<?xml version="1.0" encoding="UTF-8" ?>' +
//                    '<request>' +
//                    '<name>'+accName+'</name>' +
//                    '<phone>'+accPhone+'</phone>' +
//                    '<website>'+accWebsite+'</website>' +
//                    '</request>');
            req.setBody('{"accId" : "'+accountId+'", "accName" : "'+accName+'", "accPhone" : "'+accPhone+'", "accWebsite" : "'+accWebsite+'"}');
            req.setMethod('PUT');
            req.setHeader('Authorization','Authorization: Bearer '+Access_Token);
            Http http = new Http();
            HTTPResponse res = http.send(req);
            System.debug('****************res.getStatusCode();'+res.getStatusCode());
            System.debug('****************res.getbody();'+res.getBody());
        }
    }
}