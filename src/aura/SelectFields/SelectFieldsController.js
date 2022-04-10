/**
 * Created by ALEX on 25.05.2019.
 */
({
    doInit: function (cmp, event, helper) {
            var params= event.getParam("arguments");
            var obj = params.objApiName;
            cmp.set("v.object", obj);
            helper.getFieldsForComponent(cmp, obj);
    },
    refresh: function (cmp, event, helper) {
        // $A.get('e.force:refreshView').fire();
        cmp.set("v.values", null);
    },
    handleSaveSuccess: function (cmp, event, helper) {
    },
    handleChange: function (cmp, event, helper){
        var object = cmp.get("v.object");
        var fields = cmp.get("v.values");
        var act = cmp.get("c.getSobjectFieldsLabel");
        act.setParams({"objApiName": object,
                        "fieldsName": fields});
        act.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
           var fLabel = JSON.parse(response.getReturnValue());
            cmp.set("v.val", fLabel);
            helper.handleClickComponent(cmp,object,fLabel);
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
    },
    handleClick: function (cmp, event, helper) {
        cmp.set('v.truth', "true");
        var buttonDeleteEdit =  [{ label: 'Edit', name: 'edit' },{ label: 'Delete', name: 'delete' }];
        var action = cmp.get("c.getSobjectFieldsValue");
        var fields = cmp.get("v.val");
        var object = cmp.get("v.object");
        var fieldsName = [];
        var column = [];
        for (var i = 0; i < fields.length; i++) {
            var item = {
                "label": fields[i].label,
                "fieldName": fields[i].value,
                "sortable": true,
            };
            var buttons={ type: 'action', typeAttributes: { rowActions: buttonDeleteEdit } };
            column.push(item);
            column.push(buttons);
            fieldsName.push(fields[i].value);
        }
        cmp.set("v.columns",column);
          var fieldlist = fieldsName.join();
        action.setParams({ objApiName : object,
                           field : fieldlist
            });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                cmp.set("v.data", data);
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
    updateColumnSorting: function (cmp, event, helper) {
        cmp.set('v.isLoading', true);
        setTimeout(function() {
            var fieldName = event.getParam('fieldName');
            var sortDirection = event.getParam('sortDirection');
            cmp.set("v.sortedBy", fieldName);
            cmp.set("v.sortedDirection", sortDirection);
            helper.sortData(cmp, fieldName, sortDirection);
            cmp.set('v.isLoading', false);
        }, 0);
    },
    hideCheckboxColumn: function (cmp, event, helper) {
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
                console.log('Showing Details: ' + row);
                helper.edit(cmp, row, event );
                break;
            case 'delete':
                helper.removeBook(cmp, row);
                break;
        }
    },
    createRecord : function (component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": component.get("v.object")
        });
        createRecordEvent.fire();
    },
    fireMyComponentEventColumns : function(cmp, event, helper) {
        var columns = cmp.find("a_dualValue").get("v.value");
        var myEvent = cmp.getEvent("myComponentEvent");
        myEvent.setParams({
            "columnsTable": columns
        });
        myEvent.fire();
    }
})