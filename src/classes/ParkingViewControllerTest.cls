@isTest
private class ParkingViewControllerTest {
    @isTest static void ParkingViewControllerTest1 () {
        Parking__c parking = new Parking__c(
            Address__c='Lida',
            Capacity__c=70
        );
        INSERT parking;
        ParkingViewController controller = new ParkingViewController();
    }
}