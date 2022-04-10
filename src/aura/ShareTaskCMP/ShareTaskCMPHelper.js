/**
 * Created by akireyeu on 20.02.2020.
 */
({
    eventFire: function(component, param) {
        let objectId = component.get("v.object").Id;
        let compEvents = component.getEvent("myEvent");
        let list = [];
        list.push(objectId);
        compEvents.setParams({ "param" : param, "value" : list });
        compEvents.fire();
    },
})