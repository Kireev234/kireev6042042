/**
 * Created by akireyeu on 12.02.2020.
 */
({
    eventFire: function(component, obj, key) {
        var list = [];
        var compEvents = component.getEvent("myEvent");
        list.push(obj.apiName);
        list.push(key);
        compEvents.setParams({ "param" : 'sortReview', "value" : list });
        compEvents.fire();
    },
    eventFireDirection: function(component, obj, key) {
        var list = [];
        var compEvents = component.getEvent("myEvent");
        list.push(obj.apiName);
        list.push(key);
        compEvents.setParams({ "param" : 'sortDirectionReview', "value" : list });
        compEvents.fire();
    },
    setArrowDirection: function(component, event, helper) {
        let obj = component.get("v.field");
        if(obj.arrowDirection != 'arrowdown'){
            obj.arrowDirection = 'arrowdown';
            component.set("v.field",obj);
        } else {
            obj.arrowDirection = "";
            component.set("v.field",obj);
        }
    },
})