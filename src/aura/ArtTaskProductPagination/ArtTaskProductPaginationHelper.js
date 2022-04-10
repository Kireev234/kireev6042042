/**
 * Created by akireyeu on 07.02.2020.
 */
({
    getNumberEnd : function(component, event, helper) {
        let numberItems = component.get("v.numberItems");
        let listProductSize = component.get("v.listProductSize");
        let numberEnd = Math.ceil(Number(listProductSize)/Number(numberItems));
        component.set("v.numberEnd", numberEnd);
    },
    setNumbers : function(component, start, end, number) {
        component.set("v.start", start);
        component.set("v.end", end);
        component.set("v.num", number);
    },
    setNumberEnd : function(component, event, helper) {
        let numberItems = Number(component.get("v.numberItems"));
        let listProductSize = Number(component.get("v.listProductSize"));
        let numberEnd = Math.ceil(listProductSize/numberItems);
        component.set("v.numberEnd", numberEnd);
        let start = numberItems*(numberEnd-1);
        let end = numberItems*(numberEnd-1)+numberItems;
        this.setNumbers(component,start,end,numberEnd);
        this.fireEvent(component,start,end);
    },
    fireEvent : function(component, start, end) {
        let list=[];
        list.push(start);
        list.push(end);
        let compEvents = component.getEvent("myEvent");
        compEvents.setParams({ "param" : "numbersPagination", "value" : list });
        compEvents.fire();
    },
})