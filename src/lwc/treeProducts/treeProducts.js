/**
 * Created by AlexanderKireev on 4/2/2020.
 */
import {LightningElement, track, api, wire} from 'lwc';
import getTreeData from '@salesforce/apex/TreeApex.getTreeData';

export default class TreeProducts extends LightningElement {
    @track items;
    @track title;
    @wire(getTreeData) listViews({ error, data }) {
        if(data) {
            this.items = data;
            //this.items = data.name;
        }
        //console.log('******** data', data);
        // console.log('******** error',error);
        this.error = error;
    }
}