/**
 * Created by akireyeu on 17.01.2020.
 */

@IsTest
private class ArtTaskProductApexTest {
    @TestSetup
    static void productCreation(){
        Product__c p = new Product__c();
        p.Name = 'productTest1';
        p.Views__c = 1;
        p.Like__c = 1;
        p.Dislike__c = 1;
        p.Handle_Dislike__c = 0;
        p.Handle_Like__c = 0;
        insert p;
        Product__c prod = new Product__c();
        prod.Name = 'productTest2';
        prod.Views__c = 1;
        prod.Like__c = 1;
        prod.Dislike__c = 1;
        prod.Handle_Dislike__c = 0;
        prod.Handle_Like__c = 1;
        insert prod;
        Product__c prod2 = new Product__c();
        prod2.Name = 'productTest3';
        prod2.Views__c = 1;
        prod2.Like__c = 1;
        prod2.Dislike__c = 1;
        prod2.Handle_Dislike__c = 1;
        prod2.Handle_Like__c = 0;
        insert prod2;
        Review__c r = new Review__c();
        r.Views__c = 1;
        r.Like__c = 1;
        r.Dislike__c = 1;
        r.Handle_Dislike__c = 0;
        r.Handle_Like__c = 0;
        r.Product__c = p.Id;
        insert r;
        Review__c r2 = new Review__c();
        r2.Views__c = 1;
        r2.Like__c = 1;
        r2.Dislike__c = 1;
        r2.Handle_Dislike__c = 0;
        r2.Handle_Like__c = 0;
        r2.Product__c = prod.Id;
        insert r2;
        Review__c review = new Review__c();
        review.Views__c = 1;
        review.Like__c = 1;
        review.Dislike__c = 1;
        review.Handle_Dislike__c = 0;
        review.Handle_Like__c = 1;
        review.Product__c = p.Id;
        insert review;
        Review__c review2 = new Review__c();
        review2.Views__c = 1;
        review2.Like__c = 1;
        review2.Dislike__c = 1;
        review2.Handle_Dislike__c = 1;
        review2.Handle_Like__c = 0;
        review2.Product__c = p.Id;
        insert review2;
    }
        @isTest static void getProductTest(){
        Test.startTest();
            Product__c product = ArtTaskProductApex.getProduct()[0];
        Test.stopTest();
        System.assertEquals('productTest1', product.Name);
    }
    @isTest static void getReviewTest(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review= ArtTaskProductApex.getReview(product.Id)[0];
        Test.stopTest();
        System.assertEquals(product.Id, review.Product__c);
    }
    @isTest static void setViewsProductTest(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Product__c product2 = ArtTaskProductApex.setViewsProduct(product.Id);
        Test.stopTest();
        System.assertEquals(++product.Views__c, product2.Views__c);
    }
    @isTest static void newSetViewsReviewTest(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review = ArtTaskProductApex.getReview(product.Id)[0];
        Review__c review2 = ArtTaskProductApex.newSetViewsReview(review.Id);
        Test.stopTest();
        System.assertEquals(++review.Views__c, review2.Views__c);
    }
    @isTest static void newSetLikeProductTest(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Product__c product2 = ArtTaskProductApex.newSetLikeProduct(product.Id);
        Test.stopTest();
        System.assertEquals(++product.Like__c, product2.Like__c);
    }
    @isTest static void newSetLikeProductTest2(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[1];
        Product__c product2 = ArtTaskProductApex.newSetLikeProduct(product.Id);
        Test.stopTest();
        System.assertEquals(--product.Like__c, product2.Like__c);
    }
    @isTest static void newSetLikeProductTest3(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[2];
        Product__c product2 = ArtTaskProductApex.newSetLikeProduct(product.Id);
        Test.stopTest();
        System.assertEquals(++product.Like__c, product2.Like__c);
    }
    @isTest static void newSetDislikeProductTest(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Product__c product2 = ArtTaskProductApex.newSetDislikeProduct(product.Id);
        Test.stopTest();
        System.assertEquals(product.Dislike__c++, product2.Dislike__c);
    }
    @isTest static void newSetDislikeProductTest2(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[1];
        Product__c product2 = ArtTaskProductApex.newSetDislikeProduct(product.Id);
        Test.stopTest();
        System.assertEquals(product.Dislike__c++, product2.Dislike__c);
    }
    @isTest static void newSetDislikeProductTest3(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[2];
        Product__c product2 = ArtTaskProductApex.newSetDislikeProduct(product.Id);
        Test.stopTest();
        System.assertEquals(product.Dislike__c--, product2.Dislike__c);
    }
    @isTest static void newSetLikeReviewTest(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review = ArtTaskProductApex.getReview(product.Id)[0];
        Review__c review2 = ArtTaskProductApex.newSetLikeReview(review.Id);
        Test.stopTest();
        System.assertEquals(review.Like__c++, review2.Like__c);
    }
    @isTest static void newSetLikeReviewTest2(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review = ArtTaskProductApex.getReview(product.Id)[2];
        Review__c review2 = ArtTaskProductApex.newSetLikeReview(review.Id);
        Test.stopTest();
        System.assertEquals(review.Like__c++, review2.Like__c);
    }
    @isTest static void newSetLikeReviewTest3(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review = ArtTaskProductApex.getReview(product.Id)[1];
        Review__c review2 = ArtTaskProductApex.newSetLikeReview(review.Id);
        Test.stopTest();
        System.assertEquals(review.Like__c--, review2.Like__c);
    }
    @isTest static void newSetDislikeReviewTest(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review = ArtTaskProductApex.getReview(product.Id)[0];
        Review__c review2 = ArtTaskProductApex.newSetDislikeReview(review.Id);
        Test.stopTest();
        System.assertEquals(review.Dislike__c++, review2.Dislike__c);
    }
    @isTest static void newSetDislikeReviewTest2(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review = ArtTaskProductApex.getReview(product.Id)[1];
        Review__c review2 = ArtTaskProductApex.newSetDislikeReview(review.Id);
        Test.stopTest();
        System.assertEquals(review.Dislike__c++, review2.Dislike__c);
    }
    @isTest static void newSetDislikeReviewTest3(){
        Test.startTest();
        Product__c product = ArtTaskProductApex.getProduct()[0];
        Review__c review = ArtTaskProductApex.getReview(product.Id)[2];
        Review__c review2 = ArtTaskProductApex.newSetDislikeReview(review.Id);
        Test.stopTest();
        System.assertEquals(review.Dislike__c--, review2.Dislike__c);
    }
//    @isTest static void setViewsTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        String sId = UserInfo.getSessionId();
//        ArtTaskProductApex.setViews(id, sId);
//        ArtTaskProductApex.setViews(id, sId);
//        Product__c p2 = [SELECT Id, Views__c FROM Product__c  WHERE Product__c.Id=:id];
//        ArtTaskProductApex.setViews(id, sId);
//        Product__c p3 = [SELECT Id, Views__c FROM Product__c  WHERE Product__c.Id=:id];
//        Integer i2 = Integer.valueOf(p2.Views__c);
//        Integer i3 = Integer.valueOf(p3.Views__c);
//        Test.stopTest();
//        System.assertEquals(i2, i3);
//    }
//    @isTest static void setViewsReviewTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Product__c FROM Review__c  LIMIT 1];
//        String id = p.Id;
//        String prodId = p.Product__c;
//        String sId = UserInfo.getSessionId();
//        ArtTaskProductApex.setViewsReview(id, sId, prodId);
//        ArtTaskProductApex.setViewsReview(id, sId, prodId);
//        Review__c p2 = [SELECT Id, Views__c FROM Review__c  WHERE Review__c.Id=:id];
//        ArtTaskProductApex.setViewsReview(id, sId, prodId);
//        Review__c p3 = [SELECT Id, Views__c FROM Review__c  WHERE Review__c.Id=:id];
//        Integer i2 = Integer.valueOf(p2.Views__c);
//        Integer i3 = Integer.valueOf(p3.Views__c);
//        Test.stopTest();
//        System.assertEquals(i2, i3);
//    }
//    @isTest static void setLikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Like__c FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        Integer lik = Integer.valueOf(p.Like__c);
//        ArtTaskProductApex.setLike(id);
//        Product__c p2 = [SELECT Id, Like__c FROM Product__c  WHERE Product__c.Id=:id];
//        Integer lik2 = Integer.valueOf(p2.Like__c);
//        Test.stopTest();
//        System.assertEquals(lik+1, lik2);
//    }
//    @isTest static void setMinusLikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Like__c FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        Integer lik = Integer.valueOf(p.Like__c);
//        ArtTaskProductApex.setMinusLike(id);
//        Product__c p2 = [SELECT Id, Like__c FROM Product__c  WHERE Product__c.Id=:id];
//        Integer lik2 = Integer.valueOf(p2.Like__c);
//        Test.stopTest();
//        System.assertEquals(lik-1, lik2);
//    }
//    @isTest static void setDislikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Dislike__c FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        Integer dis = Integer.valueOf(p.Dislike__c);
//        ArtTaskProductApex.setDislike(id);
//        Product__c p2 = [SELECT Id, Dislike__c FROM Product__c  WHERE Product__c.Id=:id];
//        Integer dis2 = Integer.valueOf(p2.Dislike__c);
//        Test.stopTest();
//        System.assertEquals(dis+1, dis2);
//    }
//    @isTest static void setMinusDislikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Dislike__c FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        Integer dis = Integer.valueOf(p.Dislike__c);
//        ArtTaskProductApex.setMinusDislike(id);
//        Product__c p2 = [SELECT Id, Dislike__c FROM Product__c  WHERE Product__c.Id=:id];
//        Integer dis2 = Integer.valueOf(p2.Dislike__c);
//        Test.stopTest();
//        System.assertEquals(dis-1, dis2);
//    }
//    @isTest static void setLikeRevTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Like__c, Product__c FROM Review__c  LIMIT 1];
//        String prodId = p.Product__c;
//        String id = p.Id;
//        Integer lik = Integer.valueOf(p.Like__c);
//        ArtTaskProductApex.setLikeRev(id, prodId);
//        Review__c p2 = [SELECT Id, Like__c FROM Review__c  WHERE Review__c.Id=:id];
//        Integer lik2 = Integer.valueOf(p2.Like__c);
//        Test.stopTest();
//        System.assertEquals(lik+1, lik2);
//    }
//    @isTest static void setMinusLikeRevTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Like__c, Product__c FROM Review__c  LIMIT 1];
//        String prodId = p.Product__c;
//        String id = p.Id;
//        Integer lik = Integer.valueOf(p.Like__c);
//        ArtTaskProductApex.setMinusLikeRev(id, prodId);
//        Review__c p2 = [SELECT Id, Like__c FROM Review__c  WHERE Review__c.Id=:id];
//        Integer lik2 = Integer.valueOf(p2.Like__c);
//        Test.stopTest();
//        System.assertEquals(lik-1, lik2);
//    }
//    @isTest static void setDislikeRevTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Dislike__c, Product__c FROM Review__c  LIMIT 1];
//        String prodId = p.Product__c;
//        String id = p.Id;
//        Integer dis = Integer.valueOf(p.Dislike__c);
//        ArtTaskProductApex.setDislikeRev(id, prodId);
//        Review__c p2 = [SELECT Id, Dislike__c FROM Review__c  WHERE Review__c.Id=:id];
//        Integer dis2 = Integer.valueOf(p2.Dislike__c);
//        Test.stopTest();
//        System.assertEquals(dis+1, dis2);
//    }
//    @isTest static void setMinusDislikeRevTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Dislike__c, Product__c FROM Review__c  LIMIT 1];
//        String prodId = p.Product__c;
//        String id = p.Id;
//        Integer dis = Integer.valueOf(p.Dislike__c);
//        ArtTaskProductApex.setMinusDislikeRev(id, prodId);
//        Review__c p2 = [SELECT Id, Dislike__c FROM Review__c  WHERE Review__c.Id=:id];
//        Integer dis2 = Integer.valueOf(p2.Dislike__c);
//        Test.stopTest();
//        System.assertEquals(dis-1, dis2);
//    }
//    @isTest static void getSesIdTest(){
//        Test.startTest();
//        String id = ArtTaskProductApex.getSesId();
//        String id2 = ArtTaskProductApex.getSesId();
//        Test.stopTest();
//        System.assertEquals(id, id2);
//    }
//    @isTest static void setSesIdTest(){
//        Test.startTest();
//        List<Product__c> p = [SELECT Id, Session_Id__c FROM Product__c];
//        String id = p[0].Id;
//        String id2 = p[1].Id;
//        ArtTaskProductApex.setSesId(id);
//        ArtTaskProductApex.setSesId(id2);
//        Product__c c = [SELECT Id, Session_Id__c FROM Product__c  WHERE Product__c.Id=:id];
//        Product__c c2 = [SELECT Id, Session_Id__c FROM Product__c  WHERE Product__c.Id=:id2];
//        Test.stopTest();
//        System.assertEquals(c2.Session_Id__c, c.Session_Id__c);
//    }
//    @isTest static void getHandleLikeDislikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Handle_Like__c, Handle_Dislike__c FROM Product__c LIMIT 1];
//        ArtTaskProductApex.setHandleLike(p.Id, 1);
//        Test.stopTest();
//        System.assertEquals(1, ArtTaskProductApex.getHandleLikeDislike(p.Id)[0]);
//    }
//    @isTest static void getHandleLikeDislikeRevTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Handle_Like__c, Handle_Dislike__c FROM Review__c  LIMIT 1];
//        ArtTaskProductApex.setHandleLikeRev(p.Id, 1);
//        Test.stopTest();
//        System.assertEquals(1, ArtTaskProductApex.getHandleLikeDislikeRev(p.Id)[0]);
//    }
//    @isTest static void getHandleDislikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Handle_Dislike__c FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        ArtTaskProductApex.setHandleDislike(id, 1);
//        Test.stopTest();
//        System.assertEquals(1, ArtTaskProductApex.getHandleDislike(id));
//    }
//    @isTest static void setHandleLikeRevTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Handle_Like__c FROM Review__c  LIMIT 1];
//        String id = p.Id;
//        ArtTaskProductApex.setHandleLikeRev(id, 1);
//        Review__c c = [SELECT Id, Handle_Like__c FROM Review__c  WHERE Review__c.Id=:id];
//        Test.stopTest();
//        System.assertEquals(1, c.Handle_Like__c);
//    }
//    @isTest static void setHandleDislikeRevTest(){
//        Test.startTest();
//        Review__c p = [SELECT Id, Handle_Dislike__c FROM Review__c  LIMIT 1];
//        String id = p.Id;
//        ArtTaskProductApex.setHandleDislikeRev(id, 1);
//        Review__c c = [SELECT Id, Handle_Dislike__c FROM Review__c  WHERE Review__c.Id=:id];
//        Test.stopTest();
//        System.assertEquals(1, c.Handle_Dislike__c);
//    }
//    @isTest static void setHandleDislikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Name, Description__c, Views__c, Like__c, Dislike__c, Handle_Dislike__c, Handle_Like__c, Session_Id__c FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        ArtTaskProductApex.setHandleDislike(id, 1);
//        Product__c c = [SELECT Id, Name, Handle_Dislike__c FROM Product__c  WHERE Product__c.Id=:id];
//        Test.stopTest();
//        System.assertEquals(1, c.Handle_Dislike__c);
//    }
//    @isTest static void setHandleLikeTest(){
//        Test.startTest();
//        Product__c p = [SELECT Id, Name, Description__c, Views__c, Like__c, Dislike__c, Handle_Dislike__c, Handle_Like__c, Session_Id__c FROM Product__c  LIMIT 1];
//        String id = p.Id;
//        ArtTaskProductApex.setHandleLike(id, 1);
//        Product__c c = [SELECT Id, Name, Handle_Like__c FROM Product__c  WHERE Product__c.Id=:id];
//        Test.stopTest();
//        System.assertEquals(1, c.Handle_Like__c);
//    }
}