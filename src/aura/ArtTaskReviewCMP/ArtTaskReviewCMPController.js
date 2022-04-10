/**
 * Created by akireyeu on 11.02.2020.
 */
({
    handleClick: function(component, event, helper) {
        helper.setTriangleDirection(component,event,helper);
    },
    handleClickR: function(component, event, helper) {
        helper.setTriangleDirection(component,event,helper);
        helper.setReviewView(component,event,helper);
        helper.eventFire(component,event,helper);
    },
    handleDislike: function(component, event, helper) {
        component.set("v.disliked", !component.get("v.disliked"));
        component.set("v.liked", false);
        helper.setDislikeReview(component,event,helper);
        helper.eventFire(component,event,helper);
    },
    handleLike: function(component, event, helper) {
        component.set("v.liked", !component.get("v.liked"));
        component.set("v.disliked", false);
        helper.setLikeReview(component,event,helper);
        helper.eventFire(component,event,helper);
    },
})