/**
 * Created by akireyeu on 26.07.2019.
 */

global class MyShed implements Schedulable{
    global  List<String> emailName;
    global final String title = 'TEST';
    global final String message = 'OK';
    global MyShed(List<String> e){ emailName = e;}

    global void execute(SchedulableContext SC) {
//        MyBatch b = new MyBatch();
//        ID batchprocessid = database.executebatch(b);
        for(String s : emailName){
            SendEmail.myEmail(s,title,message);
        }
    }
}