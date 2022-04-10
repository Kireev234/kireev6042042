/**
 * Created by AlexanderKireev on 4/2/2020.
 */

public with sharing class TreeWrapper {
    @AuraEnabled
    public String name{get;set;}
    @AuraEnabled
    public String label{get;set;}
    @AuraEnabled
    public Boolean expanded{get;set;}
    @AuraEnabled
    public List<TreeWrapper> items{get;set;}
    @AuraEnabled
    public String href{get;set;}
}