/**
 * Created by ALEX on 25.05.2019.
 */
({
    showTable: function (cmp) {
        var buttonDeleteEdit =  [{ label: 'Edit', name: 'edit' },{ label: 'Delete', name: 'delete' },{ label: 'New', name: 'new' }];
        var col = cmp.get("v.val");
        var obj = cmp.get("v.object");
        var column = [];
        var newFields = [];
        for (var i = 0; i < col.length; i++) {
            var item = {
                "label": col[i].label,
                "fieldName": col[i].value,
                "sortable": true,
            };
            var buttons={ type: 'action', typeAttributes: { rowActions: buttonDeleteEdit } };
            column.push(item);
            column.push(buttons);
            newFields.push(col[i].value);
        }
        cmp.set("v.columns",column);
        var fieldList = newFields.join();
        var action = cmp.get("c.getSobjectFieldsValue");
        action.setParams({ objApiName : obj,
            field : fieldList
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                cmp.set("v.data", data);
                this.sortData(cmp);
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
    sortData: function (cmp) {
        var fieldName = cmp.get("v.sortedBy");
        var sortDirection = cmp.get("v.sortedDirection");
        var data = cmp.get("v.data");
        var reverse = sortDirection !== 'asc';
        data = Object.assign([],
            data.sort(this.sortBy(fieldName, reverse ? -1 : 1))
        );
        cmp.set("v.data", data);
    },
    sortBy: function (field, reverse, primer) {
        var key = primer
            ? function(x) { return primer(x[field]) }
            : function(x) { return x[field] };

        return function (a, b) {
            var A = key(a);
            var B = key(b);
            return reverse * ((A > B) - (B > A));
        };
    },
    removeBook: function (cmp, row) {
        var object = cmp.get("v.object");
        var rows = cmp.get('v.data');
        var rowIndex = rows.indexOf(row);
        rows.splice(rowIndex, 1);
        cmp.set('v.data', rows);
        var action = cmp.get("c.deleteValue");
        action.setParams({ "objApiName" : object,
            "recordId" : row.Id
        });
        action.setCallback(this, function(response) {
            if (response.getState() === 'SUCCESS') {
                var Message = response.getReturnValue();
                // my error checking
                if(/Please/i.test(Message) || /Custom/i.test(Message)){
                    cmp.find("CusToast").showToastModel(Message, "error");
                }
            }
            else if (response.getState() === "INCOMPLETE") {}
            else if (response.getState() === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {console.log("Unknown error");}
            }
        });
        $A.enqueueAction(action);
    },
    edit: function(cmp ,row, event ) {
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": row.Id
        });
        editRecordEvent.fire();
    },
    createRecord : function (cmp, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": cmp.get("v.object")
        });
        createRecordEvent.fire();
    }
})