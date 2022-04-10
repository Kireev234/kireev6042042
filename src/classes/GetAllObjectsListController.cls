public class GetAllObjectsListController {
    public Map<String, Schema.SObjectType> gd { get; set; }
    public List<String> listObjects { get; set; }
    public List<SelectOption> objects { get; set; }
    public String selectedObject { get; set; }
    public GetAllObjectsListController() {
        objects = new List<SelectOption>();
        listObjects = new List<String>();
        gd = Schema.getGlobalDescribe();
        listObjects.addAll(gd.keySet());
        listObjects.sort();
        SelectOption p = new SelectOption('None', '-None-');
        objects.add(p);
        for (String s : listObjects) {
            objects.add(new SelectOption(s, s));
        }
    }
}