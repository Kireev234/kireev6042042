/**
 * Created by akireyeu on 22.11.2019.
 */

public with sharing class ThrowError{
   public ThrowError(String str) {
        throw new AuraHandledException(str);
    }
}