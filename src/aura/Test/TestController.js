/**
 * Created by akireyeu on 13.12.2019.
 */
({
    doInit: function (cmp, event, helper) {
        var id = cmp.get("v.recordId");
        var act = cmp.get("c.getAddress");
        act.setParams({"AccountId": id});

        act.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var acc = response.getReturnValue();
                console.log(acc);
                helper.setAdrress(cmp,acc);
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
        $A.enqueueAction(act);

    }
})