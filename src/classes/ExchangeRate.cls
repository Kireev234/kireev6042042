/**
 * Created by akireyeu on 21.01.2020.
 */

public with sharing class ExchangeRate {
    public static  String getRate() {
        Map<String, Object> mp_StrObj = new Map<String, Object>();
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://belarusbank.by/api/kursExchange');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            List<Object> results = (List<Object>) JSON.deserializeUntyped(response.getBody());
        //List<Map<String, Object>> results = (List<Map<String, Object>>) JSON.deserializeUntyped(response.getBody());
        mp_StrObj = (Map<String, Object>)results.get(0);
//        system.debug(mp_StrObj.get('USD_out'));
//        system.debug(mp_StrObj.get('EUR_out'));
//        system.debug(mp_StrObj.get('RUB_out'));
//        system.debug(mp_StrObj.get('PLN_out'));
//    for(Object obj : results)
//    {
//        Map<String,Object> mp_StrObj = (Map<string,Object>)obj;
//        system.debug(mp_StrObj.get('USD_out'));
//    }
//    for (Object animal: results) {
//        System.debug(animal);
//    }
    }
    return JSON.serialize(mp_StrObj);
   }
}