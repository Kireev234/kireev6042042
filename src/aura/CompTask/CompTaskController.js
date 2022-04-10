/**
 * Created by akireyeu on 15.07.2019.
 */
({
    doRequest : function(component, event, helper) {
        var params = event.getParam("arguments");
        var action = params.action;
        var param = params.parameters;
        var callb = params.successCallback;
        // console.log(param,'******');
        for(var i=0; i<param.length; i++){
            action.setParam(param[i].name, param[i].value);
        }

        action.setCallback(this, function(response) {
            console.log(response.getReturnValue(),'action');
           if (response.getState() === 'SUCCESS') {
               console.log("From server: " + response.getReturnValue());
              var Message = response.getReturnValue();
               helper.CustomError(component, Message, event);
           }
            if (response.getState() === "ERROR") {
               var errors = response.getError();
               if (errors[0].message.includes('ERR:')) {
                   if (errors[0] && errors[0].message) {
                       console.log("Error message: " +
                           errors[0].message);
                       var errMessage = errors[0].message;
                       helper.showCustomError(component, errMessage, event);
                   }
               }
               else if(!errors[0].message.includes('ERR:')) {
                   if (errors[0] && errors[0].message) {
                       console.log("Error message: " +
                           errors[0].message);
                       var errorMessage = errors[0].message;
                       helper.showStandardError(component, errorMessage, event);
                   }
               }
           }
        });
        // for(var i=1; i<params.param.length; i++){
        //     console.log(params.param[i].name);
            // action.setParam(params.param[i].name, params.param[i].value);
        // }
        // console.log('Action ', action);
        // action.setParam('str1', x);
        // action.setParam('str2', x);
        //  action.setParams({'str1': x,
        //      'str2': x});
        // action.setCallback(this, function(response){
        //     console.log('2');
        //     var state = response.getState();
        //     if (state === "SUCCESS") {
        //         // Alert the user with the value returned
        //         // from the server
        //         console.log("From server: " + response.getReturnValue());
        //         value = response.getReturnValue();
        //         //helper.showToast1(cmp,event,helper);
        //         //return response.getReturnValue();
        //     }
        //     else if (state === "INCOMPLETE") {
        //         // do something
        //     }
        //     else if (state === "ERROR") {
        //         var errors = response.getError();
        //         if (errors) {
        //             if (errors[0] && errors[0].message) {
        //                 console.log("Error message: " +
        //                     errors[0].message);
        //                 var err = errors[0].message;
        //                 helper.showToast2(cmp,err,event);
        //             }
        //         } else {
        //             console.log("Unknown error");
        //         }
        //     }
        // });
        $A.enqueueAction(action);
    }
})