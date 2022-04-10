/**
 * Created by akireyeu on 19.07.2019.
 */

global with sharing class MySchedulerTest implements Schedulable{
    String myEmail = '6042042@gmail.com';
    String myTitle = 'HI';
    String myMessage = 'Hi';
    global void execute(SchedulableContext SC) {
        SendEmail.myEmail(myEmail, myTitle, myMessage);
    }
}