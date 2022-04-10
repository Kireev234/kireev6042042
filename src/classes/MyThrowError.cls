/**
 * Created by akireyeu on 16.07.2019.
 */

public with sharing class MyThrowError {
    @AuraEnabled
    public static String throwError(String str) {
        String s;
        try {
            switch on str {
                when 'Custom' {
                    throw new CustomException('Please contact your system administrator a Custom Error has occurred');
                }
                when 'SObject' {
                    throw new SObjectException();
                }
                when 'Math' {
                    throw new MathException();
                }
                when 'Search' {
                    throw new SearchException();
                }
                when 'Xml' {
                    throw new XmlException();
                }
                when 'Async' {
                    throw new AsyncException();
                }
                when 'BigObject' {
                    throw new BigObjectException();
                }
                when else {
                }
            }
        }
        catch (Exception e){
            s =  ErrorTask.insertError(e);
        }
        return JSON.serialize(s);
//        try {
//            if (str == 'Custom') {
//                throw new CustomException('Please contact your system administrator a Custom Error has occurred');
//            }
//            if (str == 'SObject') {
//                throw new SObjectException();
//            }
//            if (str == 'Math') {
//                throw new MathException();
//            }
//            if (str == 'Search') {
//                throw new SearchException();
//            }
//            if (str == 'Xml') {
//                throw new XmlException();
//            }
//            if (str == 'Async') {
//                throw new AsyncException();
//            }
//            if (str == 'BigObject') {
//                throw new BigObjectException();
//            }
//        }
//        catch (Exception e) {
//            s =  ErrorTask.insertError(e);
//        }
//        return JSON.serialize(s);
    }
}