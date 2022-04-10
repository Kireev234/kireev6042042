/**
 * Created by akireyeu on 07.10.2019.
 */
({
    fireApplicationEvent : function(cmp, event) {

        // note different syntax for getting application event
        var appEvent = $A.get("e.c:appEvent");

        appEvent.setParams({ "test" : "APP" });
        appEvent.fire();

    },

    fireComponentEvent : function(cmp, event) {

        // Look up event by name, not by type
        var compEvents = cmp.getEvent("myCompEventTest");

        compEvents.setParams({ "test" : "CMP" });
        compEvents.fire();

    },

    handleBubbledEvent : function(cmp, event) {
        console.log("handleBubbledEvent1******");
        var message = event.getParam("arguments");
        cmp.set("v.messageFromCompEvent", message.test);
        var num = cmp.get("v.numEvents1");
        num++;
        cmp.set("v.numEvents1", num);
        cmp.set("v.numEvents6", num);


    },

    handleCapturedEvent : function(cmp, event) {
        console.log("handleCapturedEvent1******");
        var message = event.getParam("arguments");
        cmp.set("v.messageFromCompEvent", message.test);
        var num = cmp.get("v.numEvents1");
        num++;
        cmp.set("v.numEvents1", num);
        cmp.set("v.numEvents7", num);

    },

    appHandleBubbledEvent : function(cmp, event) {
        console.log("appHandleBubbledEvent1******");
        var message = event.getParam("test");
        cmp.set("v.messageFromAppEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents3", num);
    },

    appHandleCapturedEvent : function(cmp, event) {
        console.log("appHandleCapturedEvent1******");
        var message = event.getParam("test");
        console.log("message1******",message);
        cmp.set("v.messageFromAppEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents4", num);
    },

    appHandleDefaultEvent : function(cmp, event) {
        console.log("appHandleDefaultEvent1******");
        var message =event.getParam("test");
        cmp.set("v.messageFromAppEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents5", num);
    }
})