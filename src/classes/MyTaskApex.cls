/**
 * Created by akireyeu on 09.07.2019.
 */

public with sharing class MyTaskApex {
    public List<Account> acc{get;set;}
//    public List<String> nam{get;set;}

    public MyTaskApex(ApexPages.StandardController controller) {
        acc = [SELECT id, name, phone FROM account LIMIT 10];
//        for (Account a: acc ){
//            nam.add(a.name);
//        }
    }
}