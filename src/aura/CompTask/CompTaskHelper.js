/**
 * Created by akireyeu on 16.07.2019.
 */
({
    // showErr : function(component, event){
    //     var toastEvent = $A.get("e.force:showToast");
    //     toastEvent.setParams({
    //         "title": "Success Message!",
    //         "message": "SUCCESS!"
    //     });
    //     toastEvent.fire();
    // },
    CustomError : function(component, errorMessage, event){
        component.find("toastCmp").showToastModel(errorMessage, "error");
        // warning success error
    },
    showCustomError : function(component, errorMessage, event){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Custom Error!",
            "message": errorMessage,
            "duration": "10000",
            "type": "error"
        });
        toastEvent.fire();

    },
    showStandardError : function(component, errorMessage, event){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Error!",
            "message": errorMessage,
            "duration": "10000",
            "type": "error"
        });
        toastEvent.fire();
    },

})