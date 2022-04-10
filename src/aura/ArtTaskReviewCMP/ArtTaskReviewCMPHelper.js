/**
 * Created by akireyeu on 11.02.2020.
 */
({

    setReviewView: function(component, event, helper) {
        var review = component.get("v.review");
        var action = component.get("c.newSetViewsReview");
        action.setParams({"reviewId": review.Id});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var value = response.getReturnValue();
                component.set('v.review', value);
                if(value.Handle_Like__c==1){
                    component.set("v.liked",true);
                    component.set("v.disliked",false);
                }else{
                    if(value.Handle_Dislike__c==1){
                        component.set("v.disliked",true);
                        component.set("v.liked",false);
                    }else{
                        component.set("v.disliked",false);
                        component.set("v.liked",false);
                    }
                }
            }
        });
        $A.enqueueAction(action);
    },
    setLikeReview: function(component, event, helper) {
        var review = component.get("v.review");
        var action = component.get("c.newSetLikeReview");
        action.setParams({"reviewId": review.Id});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var value = response.getReturnValue();
                component.set('v.review', value);
            }
        });
        $A.enqueueAction(action);
    },
    setDislikeReview: function(component, event, helper) {
        var review = component.get("v.review");
        var action = component.get("c.newSetDislikeReview");
        action.setParams({"reviewId": review.Id});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var value = response.getReturnValue();
                component.set('v.review', value);
            }
        });
        $A.enqueueAction(action);
    },
    setTriangleDirection: function(component) {
        let value = component.get("v.triangleDirection");
        if(value != 'down'){
            component.set("v.triangleDirection","down");
        } else {
            component.set("v.triangleDirection","");
        }
    },
    eventFire: function(component) {
        var compEvents = component.getEvent("myEvent");
        compEvents.setParams({ "param" : "reviewView", "value" : null });
        compEvents.fire();
    },
})