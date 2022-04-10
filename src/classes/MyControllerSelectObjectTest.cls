/**
 * Created by akireyeu on 10.06.2019.
 */


@isTest
private class MyControllerSelectObjectTest {

    @isTest static void TestMetod1() {
        Test.startTest();
        String str1=TestDataFactory.getObjects();
        String str2=MyControllerSelectObject.getObjects();
        Test.stopTest();
        System.assertEquals(str1, str2);
    }

    @isTest static void TestMetod2() {

        Test.startTest();
        List<TestDataFactory.ObjectItem> lst1 = new List<TestDataFactory.ObjectItem>();
        lst1.add(new TestDataFactory.ObjectItem('ab','ab'));
        List<MyControllerSelectObject.ObjectItem> lst2 = new List<MyControllerSelectObject.ObjectItem>();
        lst2.add(new MyControllerSelectObject.ObjectItem('bb','bb'));
        lst2.add(new MyControllerSelectObject.ObjectItem('ab','ab'));
        List<MyControllerSelectObject.ObjectItem> list2=MyControllerSelectObject.SortOptionList(lst2);
        Test.stopTest();
        System.assertEquals(lst1.get(0).label, list2.get(0).label);

    }

}