trigger CarOwners on Car_Owner__c (before insert) {
    
    List<String> passportNumberList = new List<String>();
    
    for(Car_Owner__c item : Trigger.new){
        passportNumberList.add(item.Passport_Number__c);
    }
    
    List <Car_Owner__c> CarOwners= [
        SELECT Passport_Number__c 
        FROM Car_Owner__c 
        WHERE Passport_Number__c IN : passportNumberList];
    
    Set<String> existPassportNumber = new Set<String>();
    
    for(Car_Owner__c item : CarOwners){
        existPassportNumber.add(item.Passport_Number__c);
        }
    
    for(Car_Owner__c item : Trigger.new){
        if(existPassportNumber.contains(item.Passport_Number__c)){
            item.addError('This Passport Number is exist!');
        }
    }
    

}