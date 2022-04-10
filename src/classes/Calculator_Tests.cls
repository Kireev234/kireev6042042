@isTest
public class Calculator_Tests {
 @TestSetup
  static void dataCreation(){
  
}
  @isTest static void testAddition() {
      Test.startTest();
      Integer bo = Calculator.addition(2,2);
      Test.stopTest();
      System.assertEquals(4, bo);
    } 
   @isTest static void testSubtraction() {
      Test.startTest();
      Integer b = Calculator.subtraction(4,2);
      Test.stopTest();
      System.assertEquals(2, b);
    } 
   @isTest static void testMultiply() {
      Test.startTest();
      Integer c = Calculator.multiply(4,2);
      Test.stopTest();
      System.assertEquals(8, c);
    }
    @isTest static void testMultiplyNeg() {
      Test.startTest();
        Boolean b;
        Try{
            Integer c = Calculator.multiply(0,2);
        }
        Catch(Exception e){
            b = true;
        }
      Test.stopTest();
      System.assert(b);
    }
   @isTest static void testDivide() {
      Test.startTest();
      Decimal d = Calculator.divide(4,2);
      Test.stopTest();
      System.assertEquals(2, d);
    }
   @isTest static void testDivideNeg1() {
     Test.startTest();
        Boolean b;
        Try{
            Decimal c = Calculator.divide(-4,2);
        }
        Catch(Exception e){
            b = true;
        }
      Test.stopTest();
      System.assert(b);
    }
   @isTest static void testDivideNeg() {
     Test.startTest();
        Boolean b;
        Try{
            Decimal c = Calculator.divide(2,0);
        }
        Catch(Exception e){
            b = true;
        }
      Test.stopTest();
      System.assert(b);
    } 
}