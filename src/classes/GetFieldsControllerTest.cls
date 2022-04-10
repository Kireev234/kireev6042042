/**
 * Created by akireyeu on 10.06.2019.
 */
@isTest
private class GetFieldsControllerTest {


    @isTest static void TestMetod1() {
        Test.startTest();
        String str1=TestDataFactory.getSobjectFields('Account');
        String str2=GetFieldsController.getSobjectFields('Account');
        Test.stopTest();
        System.assertEquals(str1, str2);
    }

    @isTest static void TestMetod2() {
        Test.startTest();
        List<String> str = new List<String>();
        str.add('Name');
        String str1=TestDataFactory.getSobjectFieldsLabel('Account', str);
        String str2=GetFieldsController.getSobjectFieldsLabel('Account', str);
        Test.stopTest();
        System.assertEquals(str1, str2);
    }

}