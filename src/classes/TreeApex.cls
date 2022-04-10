/**
 * Created by AlexanderKireev on 4/2/2020.
 */

public with sharing class TreeApex {
    @AuraEnabled(Cacheable=true)
    public static List<TreeWrapper> getTreeData(){
        List<Product__c> productsList = [SELECT Id, Name, Description__c, Like__c, Dislike__c, Views__c, (SELECT Id,
        Name, Description__c, Like__c, Dislike__c, Views__c FROM Reviews__r) FROM Product__c];
        List<TreeWrapper> productsListWrapper = new List<TreeWrapper>();
        for(Product__c product : productsList){
            TreeWrapper treeWrapperItem = new TreeWrapper();
            treeWrapperItem.name = product.Name;
            treeWrapperItem.label = product.Name;
            treeWrapperItem.href = '/'+product.id;
            treeWrapperItem.expanded = true;
            List<TreeWrapper> reviewsList = new List<TreeWrapper>();
            for(Review__c review : product.Reviews__r){
                TreeWrapper reviewWrapper = new TreeWrapper();
                reviewWrapper.name = review.Id;
                reviewWrapper.label = review.Name;
                reviewWrapper.href = '/'+review.id;
                reviewWrapper.expanded = true;
                reviewWrapper.items = new List<TreeWrapper>();
                reviewsList.add(reviewWrapper);
            }
            treeWrapperItem.items = reviewsList;
            productsListWrapper.add(treeWrapperItem);
        }
        return productsListWrapper;
    }
}