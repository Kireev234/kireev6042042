public class SelectAllObjects
{
      @AuraEnabled
    public static String  getObjects() {

        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        List<Schema.SObjectType> allObjects=gd.values();
        List<ObjectItem> labelApiName = new List<ObjectItem>();

        for(Schema.SObjectType item: allObjects) {
            labelApiName.add(new ObjectItem(item.getDescribe().getName(),item.getDescribe().getLabel()));
        }

        return JSON.serialize(labelApiName);

    }

    public class ObjectItem {

        public String apiName {get; set;}
        public String label {get; set;}

        public ObjectItem(String apiName, String label ) {

            this.apiName = apiName;
            this.label = label;
        }
    }
}