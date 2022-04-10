/**
 * Created by akireyeu on 20.11.2019.
 */

global with sharing class ErrorTask {

    global static String insertError(Exception e) {
        String str;
        String stackTrace = e.getStackTraceString().substringBefore('\n');
        String className = stackTrace.substringAfter('.').substringBefore('.');
        String methodName = stackTrace.substringBefore(':').substringAfter(className).substringAfter('.');
        Errors_Log__c err = new Errors_Log__c();
        err.Error_Massage__c = e.getMessage();
        err.Error_Type__c = e.getTypeName();
        err.Error_Code__c = e.getLineNumber();
        err.Error_Method__c = methodName;
        err.Error_Class__c = className;
        database.insert(err);
        if (e.getMessage().contains('Custom Error')) {
          str = e.getMessage();
        }
        else {
            str = ErrorTaskMap.getValue(e.getTypeName());
        }
        return str;
    }
}