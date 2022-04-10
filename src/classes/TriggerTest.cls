@isTest
private class TriggerTest {
    @isTest static void CarOwnerTest () {
        Car_Owner__c newCarOwner = new Car_Owner__c(
        Birthday__c=Date.today().addDays(-3),
            First_Name__c='Ilia',
            Last_Name__c='Lud',
            Passport_Number__c='hfkclh'
        );
        INSERT newCarOwner;
        Car_Owner__c newCarOwner2 = new Car_Owner__c(
        Birthday__c=Date.today().addDays(-3),
            First_Name__c='Olia',
            Last_Name__c='Ruf',
            Passport_Number__c='hfkclh'
        );
        INSERT newCarOwner2;
        
    }
}