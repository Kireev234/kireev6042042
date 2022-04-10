/**
 * Created by akireyeu on 04.12.2019.
 */
@isTest
private with sharing class ErrorTaskTest {
    @isTest static void TestMethod1(){
        Test.startTest();
        String str;
        try{
            throw new CustomException('Custom Error');
        }
        catch (Exception e){
            str = ErrorTask.insertError(e);
        }
        Test.stopTest();
        System.assertEquals('Custom Error', str);
    }
}