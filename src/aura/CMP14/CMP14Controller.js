/**
 * Created by akireyeu on 09.10.2019.
 */
({
    doInit : function(cmp, event) {
        // $A.createComponent(
        //     "c:CMP15",
        //     {
        //
        //     },
        //     function(newCard, status, errorMessage){
        //         if (status === "SUCCESS") {
        //             var body = cmp.find("CMP15");
        //             // var body = cmp.get("v.body");
        //             body.push(newCard);
        //             cmp.set("v.body", body);
        //         }
        //         else if (status === "INCOMPLETE") {
        //             console.log("No response from server or client is offline.")
        //         }
        //         else if (status === "ERROR") {
        //             console.log("Error: " + errorMessage);
        //         }
        //     }
        // );
        },
    fireApplicationEvent : function(cmp, event) {

        // note different syntax for getting application event
        var appEvent = $A.get("e.c:appEvent");

        // appEvent.setParams({ "test" : "orange" });

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
        console.log("handleBubbledEvent1.4******");
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
        console.log("handleCapturedEvent1.4******");
        var num = cmp.get("v.numEvents1");
        num++;
        cmp.set("v.numEvents1", num);
        cmp.set("v.numEvents4", num);

    },

    appHandleBubbledEvent : function(cmp, event) {
        console.log("appHandleBubbledEvent1.4******");
        // var message = event.getParam("test");
        // cmp.set("v.messageFromEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents3", num);
    },

    appHandleCapturedEvent : function(cmp, event) {
        console.log("appHandleCapturedEvent1.4******");
        // var message = event.getParam("test");
        // cmp.set("v.messageFromEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents4", num);
    },

    appHandleDefaultEvent : function(cmp, event) {
        console.log("appHandleDefaultEvent1.4******");
        // var message =event.getParam("test");
        // cmp.set("v.messageFromEvent", message);
        var num = cmp.get("v.numEvents2");
        num++;
        cmp.set("v.numEvents2", num);
        cmp.set("v.numEvents5", num);
        cmp.set("v.grey", false);
        cmp.set("v.orange", true);
        cmp.set("v.blue",false);
    },
    // test : function(cmp, event) {
    //     var params = event.getParam('comp15');
    //     cmp.set("v.childAtt", params);
    //     },
})