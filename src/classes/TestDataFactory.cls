/**
 * Created by akireyeu on 10.06.2019.
 */
@isTest
public class TestDataFactory {
    public static List<ObjectItem> SortOptionList(List<ObjectItem> ListToSort)
    {
        if(ListToSort == null || ListToSort.size() <= 1)
            return ListToSort;

        List<ObjectItem> Less = new List<ObjectItem>();
        List<ObjectItem> Greater = new List<ObjectItem>();
        integer pivot = 0;

        ObjectItem pivotValue = ListToSort[pivot];
        ListToSort.remove(pivot);

        for(ObjectItem x : ListToSort)
        {
            if(x.label <= pivotValue.label)
                Less.add(x);
            else if(x.label > ListToSort[pivot].label) Greater.add(x);
        }
        List<ObjectItem> returnList = new List<ObjectItem> ();
        returnList.addAll(SortOptionList(Less));
        returnList.add(pivotValue);
        returnList.addAll(SortOptionList(Greater));
        return returnList;
    }

    public static String  getObjects() {

        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        List<Schema.SObjectType> allObjects=gd.values();
        List<ObjectItem> labelApiName = new List<ObjectItem>();

        for(Schema.SObjectType item: allObjects) {
            labelApiName.add(new ObjectItem(item.getDescribe().getLabel(),item.getDescribe().getName()));
        }
        return JSON.serialize(SortOptionList(labelApiName));

    }
    public class ObjectItem {
        public String label {get; set;}
        public String apiName {get; set;}

        public ObjectItem(String label, String apiName) {
            this.label = label;
            this.apiName = apiName;
        }
    }

    public static String getSobjectFields(String objApiName){

        List<FieldItem> fieldItems = new List<FieldItem>();
        Map<String, Schema.SObjectField> fMap = Schema.getGlobalDescribe().get(objApiName).getDescribe().fields.getMap();

        for(String itemKey : fMap.keySet()){
            fieldItems.add(new FieldItem(fMap.get(itemKey).getDescribe().getName(), fMap.get(itemKey).getDescribe().getLabel()));
        }

        return  JSON.serialize(fieldItems);

    }
    public class FieldItem {
        public String value {get; set;}
        public String label {get; set;}

        public FieldItem(String apiName, String label) {
            this.value = apiName;
            this.label = label;
        }
    }
    public static  List<sObject> getSobjectFieldsValue(String objApiName, String field){

        String str = 'SELECT '+ field + ' FROM '+ objApiName;
        System.debug('str ==> '+str);
        List<sObject> objFieldsValueList = Database.query(str);

        System.debug('objFieldsValueList ==> '+objFieldsValueList);
        return  objFieldsValueList;
    }

    public static String getSobjectFieldsLabel(String objApiName, List<String> fieldsName){
        List<FieldItem> listFieldsName = new List<FieldItem>();
        Map<String, Schema.SObjectField> fMap = Schema.getGlobalDescribe().get(objApiName).getDescribe().fields.getMap();

        for(String itemKey : fMap.keySet()){
            for(String str : fieldsName) {
                if (str==fMap.get(itemKey).getDescribe().getName()) {
                    listFieldsName.add(new FieldItem(str,fMap.get(itemKey).getDescribe().getLabel()));
                }
            }
        }

        return  JSON.serialize(listFieldsName);

    }
}