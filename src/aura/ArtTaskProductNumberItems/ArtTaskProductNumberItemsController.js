/**
 * Created by akireyeu on 06.02.2020.
 */
({
    onSelectChange : function(component, event, helper) {
        let selected = component.find("records").get("v.value");
        let list=[];
        list.push(selected);
        let compEvents = component.getEvent("myEvent");
        compEvents.setParams({ "param" : "numberItems", "value" : list });
        compEvents.fire();
    },
})