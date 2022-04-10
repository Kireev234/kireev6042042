/**
 * Created by akireyeu on 13.12.2019.
 */
({
    setAdrress: function (cmp,acc) {

        cmp.set('v.mapMarkers', [
            {
                location: {
                    Street: acc.BillingStreet,
                    City: acc.BillingCity,
                    Country : acc.BillingCountry
                },
                title: '',
                description: ''
            }
        ]);
        // cmp.set('v.zoomLevel', 16);
    }
})