/**
 * Created by akireyeu on 22.01.2020.
 */
({
    doInit : function(component, event, helper) {
        var act = component.get("c.getRate");
        act.setCallback(this, function(response)
        {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS")
            {
                 var val = JSON.parse(response.getReturnValue());
                 //console.log(val[0]);
                 var usd = val[0].USD_out;
                 component.set("v.usd", usd);
                 var eur = val[0].EUR_out;
                 component.set("v.eur", eur);
                 var rub = val[0].RUB_out;
                 component.set("v.rub", rub);
                 var pln = val[0].PLN_out;
                 component.set("v.pln", pln);
                 var city = val[0].name;
                 component.set("v.city", city);
                 var street = val[0].street;
                 component.set("v.street", street);
                 var home = val[0].home_number;
                 component.set("v.home", home);
            }
        });
        $A.enqueueAction(act);
    },
})