/**
 * Created by akireyeu on 29.01.2020.
 */
({
    fetchAccHelper : function(component, event, helper) {
        component.set('v.myColumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'Phone'},
            {label: 'Website', fieldName: 'Website', type: 'url'},
            {label: 'Type', fieldName: 'Type', type: 'text'},
        ]);
        var action = component.get("c.getAccount");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.listAccount", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})