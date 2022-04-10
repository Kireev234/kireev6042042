/**
 * Created by akireyeu on 20.02.2020.
 */
({
    onCheck: function(component, event, helper) {
        let checkCmp = component.find("checkbox");
        let boolean = checkCmp.get("v.value");
        if(boolean){
            helper.eventFire(component, 'addObject');
        } else {
            helper.eventFire(component, 'deleteObject');
        }
    },
})