/**
 * Created by akireyeu on 06.02.2020.
 */
({
    getProductList : function(component, event, helper){
        let action = component.get("c.getProduct");
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                let productList = response.getReturnValue();
                component.set('v.listProductSize', productList.length);
                component.set('v.productList', productList);
                this.sortList(component);
            }
        });
        $A.enqueueAction(action);
    },
    iterationPagination : function(component, event, helper){
        let start = component.get("v.start");
        let end = component.get("v.end");
        let productList = component.get("v.productList")
        let list = [];
        if(productList.length > end) {
            for (let i=start; i<end; i++) {
                list.push(productList[i]);
            }
        } else {
            for (let i = start; i < productList.length; i++) {
                list.push(productList[i]);
            }
        }
        component.set('v.showProductList', list);
    },
    sortList: function(component, event) {
        let field = component.get("v.field");
        let order = component.get("v.order");
        let productList = component.get("v.productList");
        if(!$A.util.isEmpty(field)){
            productList.sort(this.compareValues(component, field, order));
            component.set('v.productList', productList);
        }
        this.iterationPagination(component);
    },
    numbersPagination: function(component, start, end) {
        component.set("v.start",start);
        component.set("v.end",end);
        this.getProductList(component);
    },
    numberItems: function(component, numberEntries) {
        let childComponent = component.find("pagination");
        childComponent.childMessageMethod("numberItems", numberEntries);
        component.set("v.numberItems", numberEntries);
        this.getProductList(component);
    },
    doMethod: function(component, field, order) {
        component.set("v.field", field);
        component.set("v.order", order);
        this.getProductList(component);
    },
    compareValues: function(component, key, order) {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
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