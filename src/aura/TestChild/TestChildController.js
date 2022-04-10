/**
 * Created by akireyeu on 09.03.2020.
 */
({
    getInput: function (component, event, helper) {
       let text = component.find('input').get('v.value');
       component.set("v.sstr",text);
    },
    alert: function (component, event, helper) {
        console.log('************');
    },
})