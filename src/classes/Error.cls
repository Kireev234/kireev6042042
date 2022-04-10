/**
 * Created by akireyeu on 18.10.2019.
 */

global with sharing class Error {
    global static void showError(Exception e, String str) {
        throw new AuraHandledException(str + ', ' + e.getTypeName());
    }
    @AuraEnabled
    global static void throwError(String type, String message) {
        try {
            if (type == 'AsyncException') {
                throw new AsyncException();
            }
            if (type == 'BigObjectException') {
                throw new BigObjectException();
            }
            if (type == 'CalloutException') {
                throw new CalloutException();
            }
            if (type == 'DmlException') {
                throw new DmlException();
            }
            if (type == 'EmailException') {
                throw new EmailException();
            }
            if (type == 'ExternalObjectException') {
                throw new ExternalObjectException();
            }
//            if (type == 'InvalidParameterValueException') {
//                throw new InvalidParameterValueException();
//            }
            if (type == 'LimitException') {
                throw new LimitException();
            }
            if (type == 'JSONException') {
                throw new JSONException();
            }
            if (type == 'ListException') {
                throw new ListException();
            }
            if (type == 'MathException') {
                throw new MathException();
            }
            if (type == 'NoAccessException') {
                throw new NoAccessException();
            }
            if (type == 'NoDataFoundException') {
                throw new NoDataFoundException();
            }
            if (type == 'NoSuchElementException') {
                throw new NoSuchElementException();
            }
            if (type == 'Button1') {
                throw new NullPointerException();
            }
            if (type == 'QueryException') {
                throw new QueryException();
            }
//            if (type == 'RequiredFeatureMissing') {
//                throw new RequiredFeatureMissing();
//            }
            if (type == 'SearchException') {
                throw new SearchException();
            }
            if (type == 'SecurityException') {
                throw new SecurityException();
            }
            if (type == 'SerializationException') {
                throw new SerializationException();
            }
            if (type == 'SObjectException') {
                throw new SObjectException();
            }
            if (type == 'StringException') {
                throw new StringException();
            }
            if (type == 'TypeException') {
                throw new TypeException();
            }
            if (type == 'VisualforceException') {
                throw new VisualforceException();
            }
            if (type == 'XmlException') {
                throw new XmlException();
            }
        }
            catch (Exception e) {
            showError(e, 'ERROR: ' + message);
        }
    }
}