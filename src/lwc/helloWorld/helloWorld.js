/**
 * Created by AlexanderKireev on 3/26/2020.
 */

import {LightningElement} from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}