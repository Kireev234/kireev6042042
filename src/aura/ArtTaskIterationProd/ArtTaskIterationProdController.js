/**
 * Created by akireyeu on 04.02.2020.
 */
({
    doInit : function(component, event, helper) {
        helper.getProductList(component,event,helper);
    },
    handleMethod : function(component, event, helper){
        let params = event.getParam('arguments');
        helper.doMethod(component, params.field, params.order);
    },
    handleEvent : function(component, event, helper){
        let params = event.getParam("param");
        let val = event.getParam("value");
        if(params=='numberItems'){
            helper.numberItems(component, val[0]);
        }
        if(params=='numbersPagination'){
            helper.numbersPagination(component,val[0],val[1]);
        }
        if(params=='productView'){
            helper.sortList(component, event, helper);
        }
    },
})