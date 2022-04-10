/**
 * Created by akireyeu on 18.06.2019.
 */

public with sharing class DataTableApex {
    @AuraEnabled(Cacheable=true)
    public static  List<sObject> getSobjectFieldsValue(String objApiName, String field){

        String str = 'SELECT '+ field + ' FROM '+ objApiName;

        List<sObject> objFieldsValueList = Database.query(str);

        return  objFieldsValueList;
    }
    @AuraEnabled(Cacheable=true)
    public static  String deleteValue(String objApiName, ID recordId){
        String str;
        try{
            String q = 'SELECT Id FROM ' +  objApiName + ' WHERE id =: recordId';
            sObject objFieldsValue = Database.query(q);
            delete  objFieldsValue;
        }
        catch (Exception e){
            str = ErrorTask.insertError(e);
        }
        System.debug(str);
        return str;
    }
}