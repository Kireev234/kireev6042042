/**
 * Created by akireyeu on 05.02.2020.
 */
({
    getReview: function(component, event, helper) {
        var prod = component.get("v.product");
        var act = component.get("c.getReview");
        act.setParams({"productId": prod.Id});
        act.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var value = response.getReturnValue();
                component.set('v.sizeReview', value.length);
            }
        });
        $A.enqueueAction(act);
    },
    setProductView: function(component, event, helper) {
        var prod = component.get("v.product");
        var action = component.get("c.setViewsProduct");
        action.setParams({"productId": prod.Id});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var value = response.getReturnValue();
                component.set('v.product', value);
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
    setLikeProduct: function(component, event, helper) {
        var prod = component.get("v.product");
        var action = component.get("c.newSetLikeProduct");
        action.setParams({"productId": prod.Id});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var value = response.getReturnValue();
                component.set('v.product', value);
            }
        });
        $A.enqueueAction(action);
    },
    setDislikeProduct: function(component, event, helper) {
        var prod = component.get("v.product");
        var action = component.get("c.newSetDislikeProduct");
        action.setParams({"productId": prod.Id});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var value = response.getReturnValue();
                component.set('v.product', value);
            }
        });
        $A.enqueueAction(action);
    },
    eventFire: function(component) {
        let product = component.get("v.product");
        let compEvents = component.getEvent("myEvent");
        let list = [];
        list.push(product.Id);
        compEvents.setParams({ "param" : "productView", "value" : list });
        compEvents.fire();
    },
    setTriangleDirection: function(component) {
        let value = component.get("v.triangleDirection");
        if(value==''){
            component.set("v.triangleDirection","down");
        }
        else {
            component.set("v.triangleDirection","");
        }
    },
    eventFireModalBox: function(component) {
        let product = component.get("v.product");
        let compEvents = component.getEvent("myEvent");
        let list = [];
        list.push(product.Id);
        compEvents.setParams({ "param" : "showModalBox", "value" : list });
        compEvents.fire();
    },
})