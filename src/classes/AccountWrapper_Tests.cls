@isTest
private class AccountWrapper_Tests {
    @TestSetup
  static void dataCreation(){
  Account a =TestFactory.getAccount('Test', true);
  List<Opportunity> opp = TestFactory.generateOppsForAccount(a.id, 110000, 2);
  insert opp;
}
 @isTest static void testBruteForceAccountCreation() {
      Account b = [SELECT ID, Name FROM ACCOUNT]; 
       Boolean bo;
       AccountWrapper ac = new AccountWrapper(b);
         
      Test.startTest();
      bo = ac.isHighPriority();
      Test.stopTest();
      System.assert(bo);
    }
}