public class ParkingViewController {
    public List<Parking__c> parkingList {get;set;}
    public List<SelectOption>  parkingSelectOptionList {get;set;}
    public List<Car__c> carList {get;set;}
    public String parkingId{get;set;}
    public ParkingViewController () {
        ParkingList = [SELECT id, Name FROM Parking__c ORDER BY Name];
        parkingId=ParkingList.isEmpty()== FALSE ? ParkingList[0].id : NULL;
        parkingSelectOptionList=new List<SelectOption>();
        for(Parking__c item : ParkingList){
            parkingSelectOptionList.add(new SelectOption(item.id, item.Name));
        }
       getCars();
        
    }
    public void getCars(){
        carList=[
            SELECT id, Name, Brand__c, Car_Owner__c, Due_data__c, Parking__c, Price__c, Release__c, Status__c 
            FROM Car__c
            WHERE Status__c='In Parking'
            AND Parking__r.id = : parkingId
        ];   
    }
    

}