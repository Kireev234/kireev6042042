/**
 * Created by akireyeu on 22.01.2020.
 */

public with sharing class RateApex {
    @AuraEnabled
    public static  String getRate() {
        Map<String, Object> mp_StrObj = new Map<String, Object>();
        List<Object> lst = new List<Object>();
        String res;
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://belarusbank.by/api/kursExchange?city=Минск');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            res = response.getBody();
        }
        return res;
    }
}



//if (response.getStatusCode() == 200) {
//res = response.getBody();
//List<Object> results = (List<Object>) JSON.deserializeUntyped(response.getBody());
//List<Map<String, Object>> results = (List<Map<String, Object>>) JSON.deserializeUntyped(response.getBody());
//mp_StrObj = (Map<String, Object>)results.get(0);
//lst = results;
//system.debug(results);
//        system.debug(mp_StrObj.get('EUR_out'));
//        system.debug(mp_StrObj.get('RUB_out'));
//        system.debug(mp_StrObj.get('PLN_out'));
//    for(Object obj : results)
//    {
//        //Map<String,Object> mp_StrObj = (Map<string,Object>)obj;
//        //system.debug(mp_StrObj.get('USD_out'));
//        system.debug(obj);
//    }
//    for (Object animal: results) {
//        System.debug(animal);
//    }
//}
//return JSON.serialize(lst);
//return res;
//}