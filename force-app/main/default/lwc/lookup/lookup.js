import {LightningElement, track, api, wire} from 'lwc';
import searchResults from '@salesforce/apex/CustomLookupController.searchResults';


export default class Lookup extends LightningElement {

    @track queryTerm;
    @track searchTerm = ''; 
    @track records; 
    @track selectedName;
    @track showResults = false;
    @track isLoading = false;
    @api selectedObject;
    @api iconName;
    

    @wire(searchResults, { searchKey : '$searchTerm', sObectType : '$selectedObject'})
    wiredResult({error, data}) {
        if(data) {
            this.records = data;
            this.error = undefined;
            this.isLoading = false;
        } else if(error) {
            this.error = error;
            this.records = undefined;
            this.isLoading = false;
        }
    }

    handleSearch(evt) {
        var inputTerm = evt.target.value;
        if(inputTerm.length > 2) {
            this.searchTerm = inputTerm;
            this.showResults = true;
            this.isLoading = true;
        }
    }

    handleSelect(event) {
        this.selectedName = event.detail.Name;
        this.showResults = false;
        this.isLoading = false;
    }
}