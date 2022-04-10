/**
 * Created by ALEX on 25.05.2019.
 */
({

    doInit: function (cmp, event, helper) {
        var action = cmp.get("c.getObjects");
        action.setCallback(this, function (response) {
            var objects = JSON.parse(response.getReturnValue());
            cmp.set('v.objects', objects);
        });
        $A.enqueueAction(action);
    },

    fireMyComponentEvent: function (cmp, event, helper) {
        var selected = cmp.find("a_opt").get("v.value");
        // console.log(selected);
        var myEvent = cmp.getEvent("myComponentEvent");
        myEvent.setParams({
            "param": selected,
            "showPicList": true
        });
        myEvent.fire();
        var event = cmp.getEvent("myCmp");
        event.setParams({
            "truth": false
        });
        event.fire();
    }
})