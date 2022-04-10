/**
 * Created by akireyeu on 14.02.2020.
 */
({
    handleEvent : function(component, event, helper){
        let params = event.getParam("param");
        let val = event.getParam("value");
        if(params == 'sortDirectionReview'){
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