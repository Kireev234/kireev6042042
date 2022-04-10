/**
 * Created by akireyeu on 24.07.2019.
 */

public with sharing class SendEmail {
    public static  void myEmail(String email, String title, String myMessage) {
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        message.toAddresses = new String[] {email};
        message.optOutPolicy = 'FILTER';
        message.subject = title;
        message.plainTextBody = myMessage;
        Messaging.SingleEmailMessage[] messages =   new List<Messaging.SingleEmailMessage> {message};
        Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);

        if (results[0].success) {
            System.debug('The email was sent successfully.');
        } else {
            System.debug('The email failed to send: ' + results[0].errors[0].message);
        }

    }
}