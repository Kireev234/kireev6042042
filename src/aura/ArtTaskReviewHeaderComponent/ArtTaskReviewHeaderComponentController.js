/**
 * Created by akireyeu on 12.02.2020.
 */
({
    sortByName: function(component, event, helper) {
        helper.setArrowDirection(component,event,helper);
        let obj = component.get("v.field");
        helper.eventFire(component, obj, 'asc');
        helper.eventFireDirection(component, obj, '');
    },
    sortByNameRevers: function(component, event, helper) {
        helper.setArrowDirection(component,event,helper);
        let obj = component.get("v.field");
        helper.eventFire(component, obj, 'desc');
        helper.eventFireDirection(component, obj, 'arrowdown');
    },
})