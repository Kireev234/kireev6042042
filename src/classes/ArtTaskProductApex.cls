/**
 * Created by akireyeu on 23.12.2019.
 */

public with sharing class ArtTaskProductApex {
    @AuraEnabled
    public static List<Product__c> getProduct() {
        return [
                SELECT Id, Name, Description__c, Views__c, Like__c, Dislike__c, Handle_Dislike__c,
                        Handle_Like__c, Session_Id__c
                FROM Product__c
        ];
    }
    @AuraEnabled
    public static List<Review__c> getReview(String productId) {
        return [
                SELECT Id, Name, Description__c, Views__c, Like__c, Dislike__c, Handle_Dislike__c,
                        Handle_Like__c, Session_Id__c, Product__c
                FROM Review__c
                WHERE Product__r.Id=:productId
        ];
    }
    //todo
    private static Product__c getProductObj(String productId) {
        return [
                SELECT Id, Name, Description__c, Views__c, Like__c, Dislike__c, Handle_Dislike__c,
                        Handle_Like__c, Session_Id__c
                FROM Product__c
                WHERE Product__c.Id =: productId
        ];
    }
    private static Review__c getReviewObj(String reviewId) {
        return [
                SELECT Id, Name, Description__c, Views__c, Like__c, Dislike__c, Handle_Dislike__c,
                        Handle_Like__c, Session_Id__c
                FROM Review__c
                WHERE Id=:reviewId
        ];
    }
    @AuraEnabled
    public static Product__c setViewsProduct(String productId) {
        Product__c product = getProductObj(productId);
        String sessionId = UserInfo.getSessionId();
        If(product.Session_Id__c != sessionId){
            product.Views__c++;
            product.Session_Id__c = sessionId;
            product.Handle_Like__c = 0;
            product.Handle_Dislike__c = 0;
            update product;
        }
        return product;
    }
    @AuraEnabled
    public static Review__c newSetViewsReview(String reviewId) {
        String sessionId = UserInfo.getSessionId();
        Review__c review = getReviewObj(reviewId);
        If(review.Session_Id__c != sessionId){
            review.Views__c++;
            review.Session_Id__c = sessionId;
            review.Handle_Like__c = 0;
            review.Handle_Dislike__c = 0;
            update review;
        }
        return review;
    }
    //todo need merge
    @AuraEnabled
    public static Product__c newSetLikeProduct(String productId) {
        Product__c product = getProductObj(productId);
        if(product.Handle_Like__c == 0){
            if(product.Handle_Dislike__c == 0){
                product.Like__c++;
                product.Handle_Like__c = 1;
            }
            else{
                product.Like__c++;
                product.Dislike__c--;
                product.Handle_Like__c = 1;
                product.Handle_Dislike__c = 0;
            }
        }
        else{
            product.Like__c--;
            product.Handle_Like__c = 0;
        }
        update product;
        return product;
    }
    @AuraEnabled
    public static Product__c newSetDislikeProduct(String productId) {
        Product__c product = getProductObj(productId);
        if(product.Handle_Dislike__c == 0){
            if(product.Handle_Like__c == 0){
                product.Dislike__c++;
                product.Handle_Dislike__c = 1;
            }
            else{
                product.Dislike__c++;
                product.Like__c--;
                product.Handle_Like__c = 0;
                product.Handle_Dislike__c = 1;
            }
        }
        else{
            product.Dislike__c--;
            product.Handle_Dislike__c = 0;
        }
        update product;
        return product;
    }
    @AuraEnabled
    public static Review__c newSetLikeReview(String reviewId) {
        Review__c review = getReviewObj(reviewId);
        if(review.Handle_Like__c == 0){
            if(review.Handle_Dislike__c == 0){
                review.Like__c++;
                review.Handle_Like__c = 1;
            }
            else{
                review.Like__c++;
                review.Dislike__c--;
                review.Handle_Like__c = 1;
                review.Handle_Dislike__c = 0;
            }
        }
        else{
            review.Like__c--;
            review.Handle_Like__c = 0;
        }
        update review;
        return review;
    }
    @AuraEnabled
    public static Review__c newSetDislikeReview(String reviewId) {
        Review__c review = getReviewObj(reviewId);
        if(review.Handle_Dislike__c == 0){
            if(review.Handle_Like__c == 0){
                review.Dislike__c++;
                review.Handle_Dislike__c = 1;
            }
            else{
                review.Dislike__c++;
                review.Like__c--;
                review.Handle_Like__c = 0;
                review.Handle_Dislike__c = 1;
            }
        }
        else{
            review.Dislike__c--;
            review.Handle_Dislike__c = 0;
        }
        update review;
        return review;
    }

//    @AuraEnabled
//    public static List<Product__c> setViews(String id, String sId) {
//        Product__c p = getProductObj(id);
//        If(p.Session_Id__c != sId){
//            p.Views__c++;
//            p.Session_Id__c = sId;
//            p.Handle_Like__c = 0;
//            p.Handle_Dislike__c = 0;
//            update p;
//        }
//        return getProduct();
//    }
    //    @AuraEnabled
//    public static List<Review__c> setViewsReview(String id, String sId, String productId) {
//        Review__c p = getReviewObj(id);
//        If(p.Session_Id__c != sId){
//            p.Views__c++;
//            p.Session_Id__c = sId;
//            p.Handle_Like__c = 0;
//            p.Handle_Dislike__c = 0;
//            update p;
//        }
//        return getReview(productId);
//    }
    //    @AuraEnabled
//    public static List<Product__c> setLike(String id) {
//        Product__c p = getProductObj(id);
//        p.Like__c++;
//        p.Handle_Like__c = 1;
//        update p;
//        return getProduct();
//    }
    //    @AuraEnabled
//    public static void newSetHandleLikeDislike() {
//                List<Product__c> listProduct = getProduct();
//        for(Product__c product : listProduct){
//            product.Handle_Like__c=0;
//            product.Handle_Dislike__c=0;
//        }
//        update listProduct;
//    }
//    @AuraEnabled
//    public static List<Product__c> setMinusLike(String id) {
//        Product__c p = getProductObj(id);
//        if(p.Like__c != 0) {
//            p.Like__c--;
//            p.Handle_Like__c = 0;
//            update p;
//        }
//        return getProduct();
//    }
//    @AuraEnabled
//    public static List<Product__c> setDislike(String id) {
//        Product__c p = getProductObj(id);
//        p.Dislike__c++;
//        p.Handle_Dislike__c = 1;
//        update p;
//        return getProduct();
//    }
//    @AuraEnabled
//    public static List<Product__c> setMinusDislike(String id) {
//        Product__c p = getProductObj(id);
//        if(p.Dislike__c != 0) {
//            p.Dislike__c--;
//            p.Handle_Dislike__c = 0;
//            update p;
//        }
//        return getProduct();
//    }
//    @AuraEnabled
//    public static List<Review__c> setLikeRev(String id, String productId) {
//        Review__c p = getReviewObj(id);
//        p.Like__c++;
//        update p;
//        return getReview(productId);
//    }
//    @AuraEnabled
//    public static List<Review__c> setMinusLikeRev(String id, String productId) {
//        Review__c p = getReviewObj(id);
//        if(p.Like__c != 0) {
//            p.Like__c--;
//            update p;
//        }
//        return getReview(productId);
//    }
//    @AuraEnabled
//    public static List<Review__c> setDislikeRev(String id, String productId) {
//        Review__c p = getReviewObj(id);
//        p.Dislike__c++;
//        update p;
//        return getReview(productId);
//    }
//    @AuraEnabled
//    public static List<Review__c> setMinusDislikeRev(String id, String productId) {
//        Review__c p = getReviewObj(id);
//        if(p.Dislike__c != 0){
//            p.Dislike__c--;
//            update p;
//        }
//        return getReview(productId);
//    }
//    @AuraEnabled
//    public static String getSesId() {
//        return UserInfo.getSessionId();
//    }
//    @AuraEnabled
//    public static void setSesId(String id) {
//        Product__c p = getProductObj(id);
//        p.Session_Id__c = UserInfo.getSessionId();
//        update p;
//    }
//    @AuraEnabled
//    public static List<Integer> getHandleLikeDislike(String id) {
//        Product__c p = getProductObj(id);
//        List<Integer> lst = new List<Integer>();
//        lst.add(Integer.valueOf(p.Handle_Like__c));
//        lst.add(Integer.valueOf(p.Handle_Dislike__c));
//        return lst;
//    }
//    @AuraEnabled
//    public static List<Integer> getHandleLikeDislikeRev(String id) {
//        Review__c r = getReviewObj(id);
//        List<Integer> lst = new List<Integer>();
//        lst.add(Integer.valueOf(r.Handle_Like__c));
//        lst.add(Integer.valueOf(r.Handle_Dislike__c));
//        return lst;
//    }
//    @AuraEnabled
//    public static Integer getHandleDislike(String id) {
//        Product__c p = getProductObj(id);
//        return Integer.valueOf(p.Handle_Dislike__c);
//    }
//    @AuraEnabled
//    public static void setHandleLike(String id, Integer i) {
//        Product__c p = getProductObj(id);
//        p.Handle_Like__c = i;
//        update p;
//    }
//    @AuraEnabled
//    public static void setHandleDislike(String id, Integer i) {
//        Product__c p = getProductObj(id);
//        p.Handle_Dislike__c = i;
//        update p;
//    }
//    @AuraEnabled
//    public static void setHandleLikeRev(String id, Integer i) {
//        Review__c r = getReviewObj(id);
//        r.Handle_Like__c = i;
//        update r;
//    }
//    @AuraEnabled
//    public static void setHandleDislikeRev(String id, Integer i) {
//        Review__c r = getReviewObj(id);
//        r.Handle_Dislike__c = i;
//        update r;
//    }
}