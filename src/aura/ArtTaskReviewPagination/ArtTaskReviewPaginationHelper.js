/**
 * Created by akireyeu on 12.02.2020.
 */
({

    getNumberEnd : function(component, event, helper) {
        let numberItems = component.get("v.numberItems");
        let listReviewSize = component.get("v.listReviewSize");
        let numberEnd = Math.ceil(Number(listReviewSize)/Number(numberItems));
        if(numberEnd>0){
            component.set("v.numberEnd", numberEnd);
        }
        else{
            component.set("v.numberEnd", 1);
                }
    },
    setNumberEnd : function(component, event, helper) {
        let numberItems = Number(component.get("v.numberItems"));
        let listProductSize = Number(component.get("v.listReviewSize"));
        let numberEnd = Math.ceil(listProductSize/numberItems);
        let start = numberItems*(numberEnd-1);
        let end = numberItems*(numberEnd-1)+numberItems;
        component.set("v.numberEnd", numberEnd);
        this.setNumbers(component,start,end,numberEnd);
        this.fireEvent(component,start,end);
    },
    setNumbers : function(component, start, end, number) {
        component.set("v.start", start);
        component.set("v.end", end);
        component.set("v.num", number);
    },
    fireEvent : function(component, start, end) {
        let list=[];
        list.push(start);
        list.push(end);
        let compEvents = component.getEvent("myEvent");
        compEvents.setParams({ "param" : "numbersPaginationReview", "value" : list });
        compEvents.fire();
    },
})