/**
 * Created by akireyeu on 11.07.2019.
 */
({
    doInit: function (cmp, event, helper) {
       // helper.getFieldSet(cmp, event, helper);
    },
    // input1 : function(cmp, event, helper) {
    //     var value = cmp.find("input1").get("v.value");
    //     cmp.set("v.objectName",value);
    //     console.log('input1 ',value);
    // },
    input2 : function(cmp, event, helper) {
        var value1 = cmp.find("input1").get("v.value");
        cmp.set("v.objectName",value1);
        var value2 = cmp.find("input2").get("v.value");
        cmp.set("v.fieldSetName",value2);
        console.log('input1 ',value1);
        console.log('input2 ',value2);
        helper.getFieldSet(cmp, event, helper);
    },
})