/**
 * Created by ALEX on 25.05.2019.
 */
({

    handleClickComponent: function (cmp, object, fLabel) {
        var myEvent = cmp.getEvent("myComponentEventTable");
        myEvent.setParams({
            "object": object,
            "columnsTable": fLabel,
            "truth": true
        });
        myEvent.fire();
    },
    getFieldsForComponent: function (cmp, object) {
        var items = [];
        var action = cmp.get("c.getSobjectFields");
        action.setParams({objApiName: object});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var options = JSON.parse(response.getReturnValue());
                for (var i = 0; i < options.length; i++) {
                    var item = {
                        "label": options[i].label,
                        "value": options[i].value
                    };
                    items.push(item);
                }
                items.sort(this.compareValues(cmp, 'label', 'asc'));
                cmp.set("v.options", items);
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    sortData: function (cmp, fieldName, sortDirection) {
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
        var rows = cmp.get('v.data');
        var rowIndex = rows.indexOf(row);
        rows.splice(rowIndex, 1);
        cmp.set('v.data', rows);
    },
    edit: function(component ,row, event ) {
        console.log(row);
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": row.Id
        });
        editRecordEvent.fire();
    },
    compareValues: function(cmp, key, order) {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    },

})