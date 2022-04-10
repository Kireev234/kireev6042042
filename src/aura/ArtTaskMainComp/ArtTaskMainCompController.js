/**
 * Created by akireyeu on 04.02.2020.
 */
({
    handleEvent: function(component, event, helper) {
        var params = event.getParam("param");
        var val = event.getParam("value");
        if(params=='sort'){
            var childComponent = component.find("iteration");
            childComponent.childMessageMethod(val[0], val[1]);
        }
        if(params=='productView'){
            component.set("v.productId",val[0]);
        }
        if(params=='showModalBox'){
            component.set("v.isOpenModalBox",true);
            var childComponent = component.find("modalBox");
            childComponent.modalMethod(val[0]);
        }
    },
})