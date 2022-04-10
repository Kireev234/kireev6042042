/**
 * Created by akireyeu on 19.12.2019.
 */

public with sharing class ErrorShowVSApex {
    private final Contact cont;
    public String PrimaryAddress {get;set;}
    public ErrorShowVSApex(ApexPages.StandardController stdController) {
        this.cont = (Contact)stdController.getRecord();
        cont.npe01__Primary_Address_Type__c='Home';
        System.debug('PrimaryAddress ');
    }
    @RemoteAction
    public static void insContact() {
        System.debug('Test');
//       cont.npe01__Primary_Address_Type__c=PrimaryAddress;
//        update cont;
    }


//    public String lastName{get;set;}
//    public String phone{get;set;}
//    public String em{get;set;}
//    public String title{get;set;}
//    public String leadSource{get;set;}
//
//    public pageReference Sav() {
//        system.debug(leadSource);
//        Contact con = new Contact(LastName = lastName, Phone = phone, Email = em, Title = title, LeadSource = 'Web');
//        insert con;
//        return null;
//    }
}