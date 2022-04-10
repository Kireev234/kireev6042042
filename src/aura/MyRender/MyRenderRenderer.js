/**
 * Created by akireyeu on 05.08.2019.
 */
({
    render : function(cmp, helper) {
        console.log('render');
        var ret = this.superRender();
        // do custom rendering here
        return ret;
    },
    rerender: function(cmp, helper) {
        console.log('rerender');
        return this.superRerender();
    },
    afterRender: function (component, helper) {
        console.log('afterRender');
        this.superAfterRender();
        // interact with the DOM here
    },
    unrender: function () {
        console.log('unrender');
        this.superUnrender();
        // do custom unrendering here
    }
})