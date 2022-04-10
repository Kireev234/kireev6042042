/**
 * Created by AlexanderKireev on 3/27/2020.
 */

import {LightningElement, wire, track, api} from 'lwc';
export default class MainLwc extends LightningElement {
    @track value;
    @track truth;
    handleData(event) {
        this.value = event.detail;
    }
    handleDataTable(event) {
        this.truth = true;
        this.template.querySelector('c-data-table-lwc').setTest(event.detail);
    }
}