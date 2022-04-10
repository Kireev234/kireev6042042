/**
 * Created by akireyeu on 11.07.2019.
 */

public with sharing class MyFieldSet {
//    @AuraEnabled
//    public static List<String> getFieldSet(String sObjectName){
//        Schema.SObjectType sObj = Schema.getGlobalDescribe().get(sObjectName);
//        List<String> fieldSetList = new List<String>();
//        FOR(Schema.FieldSet fs : sObj.getDescribe().fieldSets.getMap().values()){
//            fieldSetList.add(fs.getName());
//        }
//        return fieldSetList;
//    }
    @AuraEnabled
    public static String getFields(String sObjectName, String fieldSetName) {
        Schema.SObjectType objectType = Schema.getGlobalDescribe().get(sObjectName);
        Schema.DescribeSObjectResult objectDescribe = objectType.getDescribe();
        Map<String, Schema.FieldSet> FsMap = objectDescribe.fieldSets.getMap();
        Schema.FieldSet fieldSet = FsMap.get(fieldSetName);
        List<Schema.FieldSetMember> fieldSetMembers = fieldSet.getFields();
        List<Field> fields = new List<Field>();
        for (Schema.FieldSetMember fsm : fieldSetMembers) {
            fields.add(new Field(fsm));
        }
        return JSON.serialize(fields);
    }
    public class Field {
        @AuraEnabled public Boolean isDBRequired{get;set;}
        @AuraEnabled public String fieldAPIName{get;set;}
        @AuraEnabled public String fieldLabel{get;set;}
        @AuraEnabled public Boolean isRequired{get;set;}
        @AuraEnabled public String fieldType{get;set;}

        public Field(Schema.FieldSetMember f) {
            this.isDBRequired = f.dbRequired;
            this.fieldAPIName = f.fieldPath;
            this.fieldLabel = f.label;
            this.isRequired = f.required;
            this.fieldType = String.valueOf(f.getType());
        }
    }
}