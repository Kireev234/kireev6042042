/**
 * Created by akireyeu on 29.01.2020.
 */

public without sharing class GetAllAccount {
    @AuraEnabled(cacheable=true)
public static List<Account> getAccount(){
   return [SELECT Id, Name, Phone, Website, Type FROM Account];
   }
}