public class  ContactAndLeadSearch {
  
    public static List<List< SObject>> searchContactsAndLeads(String s){
        List<List<SObject>> searchList = [FIND :s IN ALL FIELDS 
                                      RETURNING Lead(Name), Contact(FirstName,LastName)];
        Lead[] searchLead = (Lead[])searchList[0];
		Contact[] searchContacts = (Contact[])searchList[1];
        System.debug('Found the following leads.');
        for (Lead a : searchLead) {
            System.debug(a.Name);
        }
        System.debug('Found the following contacts.');
        for (Contact c : searchContacts) {
            System.debug(c.LastName + ', ' + c.FirstName);
        }
        return searchList;
    }
}