/**
 * Created by akireyeu on 12.02.2020.
 */
({
    getReviewList : function(component, event, helper){
        let productId = component.get("v.productId");
        let action = component.get("c.getReview");
          action.setParams({"productId" : productId});
          action.setCallback(this, function(response){
                 let state = response.getState();
                 if (component.isValid() && state === "SUCCESS"){
                     let reviewList = response.getReturnValue();
                     component.set("v.reviewList", reviewList);
                     component.set('v.listReviewSize', reviewList.length);
                     this.sortList(component);
                     }
                 });
         $A.enqueueAction(action);
    },
    sortList: function(component, event) {
        var field = component.get("v.field");
        var order = component.get("v.order");
        var list = component.get("v.reviewList");
        if(!$A.util.isEmpty(field)){
            list.sort(this.compareValues(component, field, order));
            component.set('v.reviewList', list);
        }
        this.iterationPagination(component);
    },
    iterationPagination : function(component, event, helper){
        let start = component.get("v.start");
        let end = component.get("v.end");
        let reviewList = component.get("v.reviewList")
        let list = [];
        if(reviewList.length > end) {
            for (let i = start; i < end; i++) {
                list.push(reviewList[i]);
            }
        } else {
            if(reviewList.length > 0){
                for(let i = start; i < reviewList.length; i++) {
                    list.push(reviewList[i]);
                }
            } else {}
        }
        component.set('v.showReviewList', list);
    },
    numberItemsReview: function(component, numberItems) {
        let childComponent = component.find("paginationReview");
        childComponent.childReviewMethod("numberItems", numberItems);
        component.set("v.numberItems", numberItems);
        this.getReviewList(component);
    },
    numbersPaginationReview: function(component, start, end) {
        component.set("v.start",start);
        component.set("v.end",end);
        this.getReviewList(component);
    },
    compareValues: function(component, key, order) {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }
            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    },
})