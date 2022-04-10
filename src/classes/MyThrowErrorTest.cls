/**
 * Created by akireyeu on 04.12.2019.
 */
@isTest
private with sharing class MyThrowErrorTest {
    @isTest static void TestMethod1(){
        Test.startTest();
        String str = MyThrowError.throwError('Custom');
        Test.stopTest();
        System.assertEquals('\"Please contact your system administrator a Custom Error has occurred\"', str);
    }
    @isTest static void TestMethod2(){
        Test.startTest();
        String str = MyThrowError.throwError('SObject');
        Test.stopTest();
        System.assertEquals('\"Please contact your system administrator a SObject Error has occurred\"', str);
    }
    @isTest static void TestMethod3(){
        Test.startTest();
        String str = MyThrowError.throwError('Math');
        Test.stopTest();
        System.assertEquals('\"Please contact your system administrator a Math Error has occurred\"', str);
    }
    @isTest static void TestMethod4(){
        Test.startTest();
        String str = MyThrowError.throwError('Search');
        Test.stopTest();
        System.assertEquals('\"Please contact your system administrator a Search Error has occurred\"', str);
    }
    @isTest static void TestMethod5(){
        Test.startTest();
        String str = MyThrowError.throwError('Xml');
        Test.stopTest();
        System.assertEquals('\"Please contact your system administrator a Xml Error has occurred\"', str);
    }
    @isTest static void TestMethod6(){
        Test.startTest();
        String str = MyThrowError.throwError('Async');
        Test.stopTest();
        System.assertEquals('\"Please contact your system administrator an Async Error has occurred\"', str);
    }
    @isTest static void TestMethod7(){
        Test.startTest();
        String str = MyThrowError.throwError('BigObject');
        Test.stopTest();
        System.assertEquals('\"Please contact your system administrator a BigObject Error has occurred\"', str);
    }
}