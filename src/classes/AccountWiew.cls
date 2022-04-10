/**
 * Created by akireyeu on 13.12.2019.
 */
public with sharing class AccountWiew {
    @AuraEnabled
    public static Account getAddress(Id AccountId){
                Account acc = [SELECT BillingStreet,
                        BillingCity,BillingState,BillingCountry FROM Account WHERE id=: AccountId];
        return acc;
    }

}