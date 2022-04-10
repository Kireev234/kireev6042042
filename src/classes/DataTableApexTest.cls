/**
 * Created by akireyeu on 19.06.2019.
 */
@isTest
private with sharing class DataTableApexTest {

    @isTest static void TestMetod1(){
        Test.startTest();
        List<sObject> objList1=TestDataFactory.getSobjectFieldsValue('Account','Name');
        List<sObject> objList2=DataTableApex.getSobjectFieldsValue('Account','Name');
        Test.stopTest();
        System.assertEquals(objList1, objList2);
    }

}