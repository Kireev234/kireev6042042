/**
 * Created by akireyeu on 12.02.2020.
 */
({
    closeModelTable: function(component, event, helper) {
        component.set("v.isOpenModalBox", false);
    },
    handleEvent: function(component, event, helper) {
        let params = event.getParam("param");
        let val = event.getParam("value");
        if(params=='sortReview'){
            let childComponent = component.find("IterationReview");
            childComponent.childReviewMethod(null,val[0],val[1]);
        }
    },
    handleMethod: function(component, event, helper) {
        let params = event.getParam('arguments');
        let productId = params.productId;
        let childComponent = component.find("IterationReview");
        childComponent.childReviewMethod(productId);
    },
})