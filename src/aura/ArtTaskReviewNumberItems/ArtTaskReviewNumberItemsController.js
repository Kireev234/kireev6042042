/**
 * Created by akireyeu on 12.02.2020.
 */
({
    onSelectChange : function(component, event, helper) {
        let selected = component.find("recordsReview").get("v.value");
        let list=[];
        list.push(selected);
        let compEvents = component.getEvent("myEvent");
        compEvents.setParams({ "param" : "numberItemsReview", "value" : list });
        compEvents.fire();
    },
})