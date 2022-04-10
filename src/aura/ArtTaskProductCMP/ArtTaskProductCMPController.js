/**
 * Created by akireyeu on 04.02.2020.
 */
({
    handleClick: function(component, event, helper) {
        helper.setTriangleDirection(component,event,helper);
    },
    handleClickR: function(component, event, helper) {
        helper.setTriangleDirection(component,event,helper);
        helper.getReview(component,event,helper);
        helper.setProductView(component,event,helper);
        helper.eventFire(component,event,helper);
    },
    showReview: function(component, event, helper) {
        helper.eventFireModalBox(component,event,helper);
    },
    handleDislike: function(component, event, helper) {
        component.set("v.disliked", !component.get("v.disliked"));
        component.set("v.liked", false);
        helper.setDislikeProduct(component,event,helper);
        helper.eventFire(component,event,helper);
    },
    handleLike: function(component, event, helper) {
        component.set("v.liked", !component.get("v.liked"));
        component.set("v.disliked", false);
        helper.setLikeProduct(component,event,helper);
        helper.eventFire(component,event,helper);
    },
})