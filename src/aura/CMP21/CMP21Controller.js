/**
 * Created by akireyeu on 09.10.2019.
 */
({
    fireApplicationEvent : function(cmp, event) {

        // note different syntax for getting application event
        var appEvent = $A.get("e.c:appEvent");

        // appEvent.setParams({ "test" : "orange" });
       /* appEvent.setParams({ "num" : "1" });*/

        appEvent.fire();

    },

    fireComponentEvent : function(cmp, event) {

        // Look up event by name, not by type
        var compEvents = cmp.getEvent("myCompEventTest");

        // compEvents.setParams({ "test" : "blue" });
        compEvents.setParams({ "grey" : false });
        compEvents.setParams({ "blue" : true });
        compEvents.setParams({ "orange" : false });

        compEvents.fire();

    },

    handleBubbledEvent : function(cmp, event) {
        console.log("handleBubbledEvent2.1******");
        var params1 = event.getParam("grey");
        var params2 = event.getParam("blue");
        var params3 = event.getParam("orange");
        // console.log(params1);
        // console.log(params2);
        // console.log(params3);
        cmp.set("v.grey", params1);
        cmp.set("v.blue", params2);
        cmp.set("v.orange", params3);
        var num = cmp.get("v.numEvents1");
        num++;
        cmp.set("v.numEvents1", num);
        cmp.set("v.numEvents3", num);


    },

    handleCapturedEvent : function(cmp, event) {
        console.log("handleCapturedEvent2.1******");
        // var message = event.getParam("arguments");
        // cmp.set("v.messageFromEvent", message.test);
        var num = cmp.get("v.numEvents1");
        num++;
        cmp.set("v.numEvents1", num);
        cmp.set("v.numEvents4", num);

    },

    appHandleBubbledEvent : function(cmp, event) {
        console.log("appHandleBubbledEvent2.1******");
        // var message = event.getParam("test");
        // cmp.set("v.messageFromEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents3", num);
    },

    appHandleCapturedEvent : function(cmp, event) {
        console.log("appHandleCapturedEvent2.1******");
        // var message = event.getParam("test");
        // cmp.set("v.messageFromEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents4", num);
    },

    appHandleDefaultEvent : function(cmp, event) {
        console.log("appHandleDefaultEvent2.1******");
        // var message =event.getParam("test");
        // cmp.set("v.messageFromEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents5", num);
        cmp.set("v.grey", false);
        cmp.set("v.orange", true);
        cmp.set("v.blue",false);
    }
})