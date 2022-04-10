/**
 * Created by ALEX on 25.05.2019.
 */

public with sharing class GetFieldsController {
    @AuraEnabled(cacheable=true)
   public static String getSobjectFields(String objApiName) {
        List<FieldItem> fieldItems = new List<FieldItem>();
        Map<String, Schema.SObjectField> fMap = Schema.getGlobalDescribe().get(objApiName).getDescribe().fields.getMap();

        for (String itemKey : fMap.keySet()) {
            fieldItems.add(new FieldItem(fMap.get(itemKey).getDescribe().getName(), fMap.get(itemKey).getDescribe().getLabel()));
        }
        return JSON.serialize(fieldItems);
    }

    public class FieldItem {
        public String value { get; set; }
        public String label { get; set; }
        public FieldItem(String apiName, String label) {
            this.value = apiName;
            this.label = label;
        }
    }
    @AuraEnabled
    public static String getSobjectFieldsLabel(String objApiName, List<String> fieldsName) {
        List<FieldItem> listFieldsName = new List<FieldItem>();
        Map<String, Schema.SObjectField> fMap = Schema.getGlobalDescribe().get(objApiName).getDescribe().fields.getMap();

        for (String str : fieldsName) {
            for (String itemKey : fMap.keySet()) {
                if (str == fMap.get(itemKey).getDescribe().getName()) {
                    listFieldsName.add(new FieldItem(str, fMap.get(itemKey).getDescribe().getLabel()));
                }
            }
        }
        return JSON.serialize(listFieldsName);
    }
}