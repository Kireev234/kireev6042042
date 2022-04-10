/**
 * Created by akireyeu on 29.01.2020.
 */
({
    doInit : function(component, event, helper) {
        const empApi = component.find('empApi');
        empApi.onError($A.getCallback(error => {
            // Error can be any type of error (subscribe, unsubscribe...)
            console.error('EMP API error: ', error);
        }));
        empApi.subscribe("/data/AccountChangeEvent", -1, $A.getCallback(eventReceived => {
            console.log('Received event ', JSON.stringify(eventReceived));
            helper.fetchAccHelper(component, event, helper);
        })).then(subscription => {
                console.log('Subscribed to channel ', subscription.channel);
                component.set('v.subscription', subscription);
            });
        helper.fetchAccHelper(component, event, helper);
    },

    subscribe2 : function(component, event, helper) {
        const empApi = component.find('empApi');
        const channel = component.find('channel').get('v.value');
        const replayId = -1;
        empApi.subscribe(channel, replayId, $A.getCallback(eventReceived => {
            // Process event (this is called each time we receive an event)
            console.log('Received event ', JSON.stringify(eventReceived));
            helper.fetchAccHelper(component, event, helper);
    }))
    .then(subscription => {
            console.log('Subscribed to channel ', subscription.channel);
        component.set('v.subscription', subscription);
    });
    },
    unsubscribe2 : function(component, event, helper) {
        const empApi = component.find('empApi');
        const subscription = component.get('v.subscription');
        empApi.unsubscribe(subscription, $A.getCallback(unsubscribed => {
            console.log('Unsubscribed from channel '+ unsubscribed.subscription);
            component.set('v.subscription', null);
        }));
    }
})