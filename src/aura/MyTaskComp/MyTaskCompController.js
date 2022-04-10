/**
 * Created by akireyeu on 08.07.2019.
 */
({
        doInit : function(component) {
            // var vfOrigin = "https://" + component.get("v.vfHost");
            // window.addEventListener("message", function(event) {
            //     if (event.origin !== vfOrigin) {
            //         console.log(event.origin);
            //         // Not the expected origin: Reject the message!
            //         return;
            //     }
            //     // //Handle the message
            //     console.log(event.data);
            //     var x=component.get("v.objects");
            //     x.push(event.data);
            //     component.set("v.objects",x)
            // }, false);

            var vfOriginAcct = "https://" + component.get("v.vfHostAcct");
            window.addEventListener("message", function(event) {
                if (event.origin !== vfOriginAcct) {
                    console.log(event.origin);
                    // Not the expected origin: Reject the message!
                    return;
                }
                // //Handle the message
                //console.log(event.data);
                var obj = JSON.parse(event.data);
                console.log(obj);
                component.set("v.acct",obj.split(",") );
                }, false);
        }
})