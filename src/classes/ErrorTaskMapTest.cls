/**
 * Created by akireyeu on 06.12.2019.
 */
@isTest
private with sharing class ErrorTaskMapTest {
    @isTest static void TestMethod1(){
        Test.startTest();
        String str;
        str = ErrorTaskMap.getValue('Test');
        Test.stopTest();
        System.assertEquals('UNKNOWN ERROR', str);
    }
    @isTest static void TestMethod2(){
        Test.startTest();
        String str;
        str = ErrorTaskMap.getValue('System.SObjectException');
        Test.stopTest();
        System.assertEquals('Please contact your system administrator a SObject Error has occurred', str);
    }
}