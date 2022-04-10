/**
 * Created by akireyeu on 26.11.2019.
 */

public with sharing class ErrorTaskMap {
 public static Map<String, String> errMap = new Map<String, String>{
         'System.SObjectException' => 'Please contact your system administrator a SObject Error has occurred',
         'System.MathException' => 'Please contact your system administrator a Math Error has occurred',
         'System.SearchException' => 'Please contact your system administrator a Search Error has occurred',
         'System.XmlException' => 'Please contact your system administrator a Xml Error has occurred',
         'System.AsyncException' => 'Please contact your system administrator an Async Error has occurred',
         'System.BigObjectException' => 'Please contact your system administrator a BigObject Error has occurred',
         'System.CalloutException'=> 'Please contact your system administrator a Callout Error has occurred',
         'System.DmlException' => 'Please contact your system administrator a Dml Error has occurred',
         'System.EmailException' => 'Please contact your system administrator an Email Error has occurred',
         'System.ExternalObjectException' => 'Please contact your system administrator an ExternalObject Error has occurred',
         'System.IllegalArgumentException' => 'Please contact your system administrator an Illegal Argument Error has occurred',
         'System.InvalidParameterValueException'=> 'Please contact your system administrator an InvalidParameterValue Error has occurred',
         'System.LimitException' => 'Please contact your system administrator a Limit Error has occurred',
         'System.JSONException' => 'Please contact your system administrator a JSONE Error has occurred',
         'System.ListException' => 'Please contact your system administrator a List Error has occurred',
         'System.NoAccessException'=> 'Please contact your system administrator a NoAccess Error has occurred',
         'System.NoDataFoundException' => 'Please contact your system administrator a NoDataFound Error has occurred',
         'System.NoSuchElementException' => 'Please contact your system administrator a NoSuchElement Error has occurred',
         'System.NullPointerException' => 'Please contact your system administrator a NullPointer Error has occurred',
         'System.QueryException' => 'Please contact your system administrator a Query Error has occurred',
         'System.RequiredFeatureMissing'=> 'Please contact your system administrator a RequiredFeatureMissing Error has occurred',
         'System.SecurityException' => 'Please contact your system administrator a Security Error has occurred',
         'System.SerializationException' => 'Please contact your system administrator a Serialization Error has occurred',
         'System.StringException'=> 'Please contact your system administrator a String Error has occurred',
         'System.TypeException' => 'Please contact your system administrator a Type Error has occurred',
         'System.VisualforceException' => 'Please contact your system administrator a Visualforce Error has occurred'
 };
    public static String getValue (String key){
        try {
            if (errMap.get(key)==null) {
                return 'UNKNOWN ERROR';
            }
            return errMap.get(key);
        }
        catch(Exception e) {return 'UNKNOWN ERROR';}
    }
}