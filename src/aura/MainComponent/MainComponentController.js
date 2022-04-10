/**
 * Created by akireyeu on 07.10.2019.
 */
({
    doInit : function(cmp, event, helper) {
    },
    handleMyComponentEvent : function(cmp, event, helper) {
        var value = event.getParam("param");
        var par = event.getParams("params");
        cmp.set("v.showPicList",par.showPicList);
        var childCmp = cmp.find("selectedField");
        childCmp.sampleMethod(value);
    },
    handleMyComponentEventTable : function(cmp, event, helper) {
        var objApiName = event.getParam("object");
        var objFields = event.getParam("columnsTable");
        var truth = event.getParam("truth");
        var childCmpTable = cmp.find("selectedTable");
        childCmpTable.sampleMethodTable(objApiName,objFields,truth);
    },
    handleMyCmp : function(cmp, event, helper) {
        var truth = event.getParam("truth");
        var child = cmp.find("selectedTable");
        child.methodTable(truth);
        var childSel = cmp.find("selectedField");
        childSel.method();
    }

})