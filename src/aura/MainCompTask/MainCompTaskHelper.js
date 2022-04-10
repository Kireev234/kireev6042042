/**
 * Created by akireyeu on 06.12.2019.
 */
({
    showCustomToast : function(component, str, helper){
        var action = component.get("c.throwError");
        action.setParams({ 'str' : str });
        action.setCallback(this, function(response) {
            if (response.getState() === 'SUCCESS') {
                var Message = JSON.parse(response.getReturnValue());
                // my error checking
                if(/Please/i.test(Message)){
                    component.find("CustomToast").showToastModel(Message, "error");
                }
            }
            else if (response.getState() === "INCOMPLETE") {}
            else if (response.getState() === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {console.log("Unknown error");}
            }
        });
        $A.enqueueAction(action);
    }
})