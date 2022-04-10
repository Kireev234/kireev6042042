/**
 * Created by AlexanderKireev on 3/30/2020.
 */

import {LightningElement, wire, api, track,} from 'lwc';
import getSobjectFieldsValue from '@salesforce/apex/DataTableApex.getSobjectFieldsValue';
import { createRecord } from 'lightning/uiRecordApi';
const actions = [
    { label: 'New', name: 'new' },
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' },
];

export default class DataTableLwc extends LightningElement {
    @api objectapi;
    @api test;
    @track data;
    @track columns;
    @track myfield;
    @track record;

    @wire(getSobjectFieldsValue, {objApiName: '$objectapi', field: '$myfield'})
    datatable({error, data}) {
        if (data) {
            this.data = data;
        }
        this.error = error;
    }

    @api setTest(test) {
          if(test) {
              let col = [];
              let field = [];
            for (let char of test) {
                col.push({label: JSON.parse(char).label, fieldName: JSON.parse(char).value})
                field.push(JSON.parse(char).value);
            }
            col.push({
                type: 'action',
                typeAttributes: { rowActions: actions },
            },);
            this.columns = col;
            this.myfield = String(field);
          }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'delete':
                this.deleteRow(row);
                break;
            case 'new':
                createRecord('Contact');
                break;
            case 'edit':
                this.edit(row);
                break;
            default:
        }
    }

    deleteRow(row) {
        const { id } = row;
        const index = this.findRowIndexById(id);
        if (index !== -1) {
            this.data = this.data
                .slice(0, index)
                .concat(this.data.slice(index + 1));
        }
    }

    findRowIndexById(id) {
        let ret = -1;
        this.data.some((row, index) => {
            if (row.id === id) {
                ret = index;
                return true;
            }
            return false;
        });
        return ret;
    }

    showRowDetails(row) {
         this.record = row.Id;
         console.log('row=> ',row.Id);
    }

   edit(row) {}

}