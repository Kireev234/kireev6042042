/**
 * Created by akireyeu on 24.12.2019.
 */
({
    init: function (cmp, event, helper) {
        var action = cmp.get("c.getReview");
        action.setParams({ id : '01t2v000009E5mQAAS'});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                // console.log(data.length+" length");
                cmp.set("v.data", data);
                // console.log('data ==> ',cmp.get('v.data'));

            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    handleLike: function (component, event, helper) {
        var v = event.getSource().get("v.value");
        //console.log(v);
        var action = component.get("c.setLike");
        action.setParams({id : v});
        $A.enqueueAction(action);
    },
    handleDislike: function (component, event, helper) {
        var v = event.getSource().get("v.value");
        //console.log(v);
        var action = component.get("c.setDislike");
        action.setParams({id : v});
        $A.enqueueAction(action);

    },
})