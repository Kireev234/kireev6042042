/**
 * Created by AlexanderKireev on 3/27/2020.
 */

import {LightningElement, track, api, wire} from 'lwc';
import getSobjectFields from '@salesforce/apex/GetFieldsController.getSobjectFields';
export default class GetObjectFields extends LightningElement {
    @api results;
    @api objectapi;
    @track selected;
    @wire(getSobjectFields, {objApiName: '$objectapi'})
    listFields({error, data}) {
        if (data) {
            const parsedData = JSON.parse(data);
            //console.log('--------- data parse', parsedData);
            this.results = parsedData;
        }
        this.error = error;
    }
    get options() {
        if(this.results) {
            let listOptions = [];
            for (let char of this.results) {
                listOptions.push({label: char.label, value: JSON.stringify({value: char.value, label: char.label})});
            }
            return listOptions;
        }
    }
    handleChange(event) {
        this.selected = event.detail.value;
        this.dispatchEvent(new CustomEvent('selectfields',{detail: event.detail.value}));

        //this.template.querySelector('c-data-table-lwc').setTest('iiiii');
        // this.value = event.detail.value;
        // this.dispatchEvent(new CustomEvent('showdata',{detail: event.detail.value}));
    }
}