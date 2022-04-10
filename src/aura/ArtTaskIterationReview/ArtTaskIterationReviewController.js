/**
 * Created by akireyeu on 12.02.2020.
 */
({
    handleMethod : function(component, event, helper){
        let params = event.getParam('arguments');
        if(params.productId!=null){
            component.set("v.productId",params.productId);
        } else {
            component.set("v.field",params.field);
            component.set("v.order",params.order);
        }
        helper.getReviewList(component,event,helper);
    },
    handleEvent : function(component, event, helper){
        let params = event.getParam("param");
        let val = event.getParam("value");
        if(params=='numberItemsReview'){
            helper.numberItemsReview(component,val[0]);
        }
        if(params=='numbersPaginationReview'){
            helper.numbersPaginationReview(component, val[0], val[1]);
        }
        if(params=='reviewView'){
            helper.sortList(component, event, helper);
        }
    },
})