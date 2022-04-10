public without sharing class MyControllerSelectObject {
	public static List<ObjectItem> SortOptionList(List<ObjectItem> ListToSort) {
            if(ListToSort == null || ListToSort.size() <= 1)
                return ListToSort;
            List<ObjectItem> Less = new List<ObjectItem>();
            List<ObjectItem> Greater = new List<ObjectItem>();
            integer pivot = 0;
            ObjectItem pivotValue = ListToSort[pivot];
            ListToSort.remove(pivot);
            for(ObjectItem x : ListToSort) {
                if(x.label <= pivotValue.label)
                Less.add(x);
                else if(x.label > pivotValue.label) Greater.add(x);
            }
            List<ObjectItem> returnList = new List<ObjectItem> ();
            returnList.addAll(SortOptionList(Less));
            returnList.add(pivotValue);
            returnList.addAll(SortOptionList(Greater));
                return returnList;
    }
    @AuraEnabled(Cacheable=true)
    public static String  getObjects() {
    //public static List<ObjectItem>  getObjects() {
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        List<Schema.SObjectType> allObjects = gd.values();
        List<ObjectItem> labelApiName = new List<ObjectItem>();
        for(Schema.SObjectType item: allObjects) {
            labelApiName.add(new ObjectItem(item.getDescribe().getLabel(),item.getDescribe().getName()));
        }
        return JSON.serialize(SortOptionList(labelApiName));
        //return JSON.serialize(labelApiName);
        //return labelApiName;

    }
		public class ObjectItem {
            public String label {get; set;}
            public String apiName {get; set;}

            public ObjectItem(String label, String apiName) {
                this.label = label;
                this.apiName = apiName;
            }
        }
}