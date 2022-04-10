/**
 * Created by akireyeu on 04.02.2020.
 */
({
    handleEvent : function(component, event, helper){
        var params = event.getParam("param");
        var val = event.getParam("value");
        if(params == 'sortDirectionProduct'){
            let listObject = component.get("v.listField");
            for (let i = 0; i <listObject.length ; i++) {
                if(listObject[i].apiName != val[0]){
                    listObject[i].arrowDirection='';
                }
                else{
                    listObject[i].arrowDirection=val[1];
                }
            }
            component.set("v.listField",listObject);
        }
    },
})