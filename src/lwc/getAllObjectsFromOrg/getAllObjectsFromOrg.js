/**
 * Created by AlexanderKireev on 3/26/2020.
 */

import {LightningElement, wire, track, api} from 'lwc';
import getObjects from '@salesforce/apex/MyControllerSelectObject.getObjects';
export default class GetAllObjectsFromOrg extends LightningElement {
    @track results;
    @track value;
    //@wire(getObjects) listViews;
    @wire(getObjects) listViews({ error, data }) {
        if(data) {
            const parsedData = JSON.parse(data);
            //console.log('******** data parse', parsedData);
            this.results = parsedData;
        }
        //console.log('******** data', data);
       // console.log('******** error',error);
        this.error = error;
    }
    get options() {
        if(this.results) {
            let listOptions = [];
            for (let char of this.results) {
                listOptions.push({label: char.label, value: char.apiName});
            }
            return listOptions;
        }
    }
    handleChange(event) {
        this.value = event.detail.value;
        this.dispatchEvent(new CustomEvent('showdata',{detail: event.detail.value}));
    }
}