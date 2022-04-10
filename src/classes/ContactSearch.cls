public class ContactSearch {
    public static List<Contact > searchForContacts(String str1,String str2){
        List<Contact> contacts = new List<Contact>();
        String lastName=str1;
        String mailingPostalCode=str2;
        contacts=[SELECT ID, Name
                               FROM Contact  
                               WHERE LastName = : lastName 
                               AND MailingPostalCode = : mailingPostalCode];
        return contacts;
    }
}