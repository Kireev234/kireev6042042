/**
 * Created by akireyeu on 24.07.2019.
 */

global class MyBatch implements Database.Batchable<sObject> {
    global final String t = 'test';
    global final String query = 'select Email from Contact where Title = :t';
    global final String title = 'TEST';
    global final String message = 'OK';
    global List<String> emailName = new List<String>();

    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext BC, List<sObject> scope) {
        for (sObject s : scope) {
            Contact c = (Contact) s;
            //System.debug(c.Email);
            emailName.add(c.Email);
            //System.debug(emailName+' execute method');
        }
        MyShed m = new MyShed(emailName);
        String sch1 = '0 30 4 * * ?';
        System.schedule('Test1', sch1, m);
        String sch2 = '0 35 4 * * ?';
        System.schedule('Test2', sch2, m);
        String sch3 = '0 40 4 * * ?';
        System.schedule('Test3', sch3, m);
    }

    global void finish(Database.BatchableContext BC) {
        AsyncApexJob a = [
                SELECT Id, Status, NumberOfErrors, JobItemsProcessed,
                        TotalJobItems, CreatedBy.Email
                FROM AsyncApexJob
                WHERE Id = :BC.getJobId()
        ];
        String[] toAddresses = new String[]{
                a.CreatedBy.Email
        };
        System.debug(a.TotalJobItems + ' TotalJobItems');
        System.debug(a.JobItemsProcessed + ' JobItemsProcessed');
        System.debug(a.CreatedBy.Email + ' CreatedBy.Email');
        System.debug(a.NumberOfErrors + ' NumberOfErrors');
    }
}