/**
 * Created by akireyeu on 28.01.2020.
 */

trigger accountTrigger on Account (after insert, after update) {
    for (Account a : Trigger.new) {
        if (Trigger.isInsert) {
            GetAccountUsingRESTAPI.createAccount(a.Name, a.Phone, a.Website);
        }
        else if (Trigger.isUpdate) {
            GetAccountUsingRESTAPI.updateAccount(a.Name, a.Phone, a.Website, '0012v00002tZ8PkAAK');
        }
    }
}