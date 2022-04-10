/**
 * Created by akireyeu on 05.02.2020.
 */
({
    eventFire: function(component, obj, key) {
        let list = [];
        let compEvents = component.getEvent("myEvent");
        list.push(obj.apiName);
        list.push(key);
        compEvents.setParams({ "param" : 'sort', "value" : list });
        compEvents.fire();
    },
    eventFireDirection: function(component, obj, key) {
        let list = [];
        let compEvents = component.getEvent("myEvent");
        list.push(obj.apiName);
        list.push(key);
        compEvents.setParams({ "param" : 'sortDirectionProduct', "value" : list });
        compEvents.fire();
    },
    setDirection: function(component, event, helper) {
        let obj = component.get("v.field");
        if(obj.arrowDirection != 'arrowdown'){
            obj.arrowDirection = 'arrowdown';
            component.set("v.field",obj);
        } else {
            obj.arrowDirection = '';
            component.set("v.field",obj);
        }
    },
})