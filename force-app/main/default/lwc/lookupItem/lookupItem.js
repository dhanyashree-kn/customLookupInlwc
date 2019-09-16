import {LightningElement, api} from 'lwc';

export default class LookupItem extends LightningElement {

    @api record;
    @api iconName;
 
    handleSelectRecord(event) {

        const evt = new CustomEvent('select', {
            detail : this.record,
            bubbles : true
        });
        this.dispatchEvent(evt);
    }

}