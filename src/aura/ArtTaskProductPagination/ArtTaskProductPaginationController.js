/**
 * Created by akireyeu on 06.02.2020.
 */
({
    doInit : function(component, event, helper) {
        setTimeout(function(){
            helper.getNumberEnd(component,event,helper);
        }, 500);
    },
    onChange : function(component, event, helper) {
        let selected = Number(component.find("number").get("v.value"));
        let numberItems = Number(component.get("v.numberItems"));
        let listProductSize = Number(component.get("v.listProductSize"));
        let numberEnd = Number(Math.ceil(listProductSize/numberItems));
        if(selected>numberEnd){
            let start = numberItems*(numberEnd-1);
            let end = numberItems*(numberEnd-1)+numberItems;
            helper.setNumbers(component,start,end,numberEnd);
            helper.fireEvent(component,start,end);
        } else {
            if (selected <= 1) {
                helper.setNumbers(component,0,numberItems,1);
                helper.fireEvent(component, 0, numberItems);
            }
            else {
                let start = numberItems * (selected - 1);
                let end = numberItems * (selected - 1) + numberItems;
                helper.setNumbers(component,start,end,selected);
                helper.fireEvent(component, start, end);
            }
        }

    },
    first : function(component, event, helper) {
        let end = Number(component.get("v.numberItems"));
        helper.setNumbers(component,0,end,1);
        helper.fireEvent(component, 0, end);
    },
    previous : function(component, event, helper) {
        let start = Number(component.get("v.start"));
        let end = Number(component.get("v.end"));
        let num = Number(component.get("v.num"));
        let numberItems = Number(component.get("v.numberItems"));
        start = start - numberItems;
        end = end - numberItems;
        num = num - 1;
        helper.setNumbers(component,start,end,num);
        helper.fireEvent(component, start, end);
    },
    next : function(component, event, helper) {
        let start = Number(component.get("v.start"));
        let end = Number(component.get("v.end"));
        let num = Number(component.get("v.num"));
        let numberItems = Number(component.get("v.numberItems"));
        start = start + numberItems;
        end = end + numberItems;
        num = num + 1;
        helper.setNumbers(component,start,end,num);
        helper.fireEvent(component, start, end);

    },
    last : function(component, event, helper) {
        helper.setNumberEnd(component, event, helper);
    },
    handleMethod : function(component, event, helper) {
        var params = event.getParam('arguments');
        var end = params.end;
        component.set("v.numberItems", end);
        helper.setNumbers(component,0,end,1);
        helper.getNumberEnd(component,event,helper);
    },
})