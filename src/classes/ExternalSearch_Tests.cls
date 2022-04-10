@isTest
private class ExternalSearch_Tests {
  @isTest static void test_method_one() {
    HttpMockFactory mock = new HttpMockFactory(200, 'OK', 'I found it!', new Map<String,String>());
    Test.setMock(HttpCalloutMock.class, mock);
    String result;
    Test.startTest();
      result = ExternalSearch.googleIt('epic search');
    Test.stopTest();
    system.assertEquals('I found it!', result); 
  }
    @isTest static void test_method_two() {
    HttpMockFactory mock2 = new HttpMockFactory(500, 'OK', 'I found it!', new Map<String,String>());
    Test.setMock(HttpCalloutMock.class, mock2);
    String result2;
    Boolean b;    
    Test.startTest();
        Try{
            result2 = ExternalSearch.googleIt('epic search');}
        Catch(Exception e){
            b=true;
        }
    Test.stopTest();
    system.assert(b); 
  }
}