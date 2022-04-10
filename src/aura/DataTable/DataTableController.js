/**
 * Created by akireyeu on 17.06.2019.
 */
({
    doInit: function (cmp, event, helper) {
        var params = event.getParam("arguments");
        var obj = params.objApiName;
        var col = params.objFields;
        var truth = params.truth;
        cmp.set('v.object', obj);
        cmp.set('v.val', col);
        cmp.set('v.truth', truth);
        helper.showTable(cmp, event, helper);
    },
    setTruth: function (cmp, event, helper) {
        var params = event.getParam("arguments");
        var t = params.truth;
        cmp.set('v.truth', t);
    },
    handleChange: function (cmp, event, helper) {
        helper.showTable(cmp, event, helper);
    },
    updateColumnSorting: function (cmp, event, helper) {
        setTimeout(function() {
            var fieldName = event.getParam('fieldName');
            var sortDirection = event.getParam('sortDirection');
            cmp.set("v.sortedBy", fieldName);
            cmp.set("v.sortedDirection", sortDirection);
            helper.sortData(cmp, event, helper);
        }, 0);
    },
    getSelectedName: function (cmp, event) {
        var selectRow = event.getParam('selectedRows');
        cmp.set("v.selectedRows", selectRow);
    },
    handleRowAction: function (cmp, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'edit':
                helper.edit(cmp, row, event );
                break;
            case 'delete':
                helper.removeBook(cmp, row);
                break;
            case 'new':
                helper.createRecord(cmp, event, helper);
                break;
        }
    },
    createRecord : function (cmp, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": cmp.get("v.object")
        });
        createRecordEvent.fire();
        //window.open('http://{!Account }','_blank')
    }
})