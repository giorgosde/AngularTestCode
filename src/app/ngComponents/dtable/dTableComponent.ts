import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Utils } from '../Utils';

@Component({
  selector: 'dtable',
  templateUrl: './templates/dtable.html',
  styleUrls: ['./css/style.css'],
})
export class dTableComponent  {
  constructor(){};
  @Input() headerItmes:any;
  @Input() items:any;
  
  sortOptions:any =[{text:"Ascending", value:"asc"},{text:"Descending", value:"desc"}];
  searchString:string;
  visibleItems:Array<any>;
  isInputValid:boolean=true;

ngOnInit(){
  this.visibleItems=this.items;
  this.searchString='';
}

ngOnChanges(){
    this.visibleItems=this.items;
}

sortTable(element:any, option:any){
  this.visibleItems = this.visibleItems.sort(Utils.compareValues(element.toLowerCase(), option));
}


filterTable(searchStr:any){
  searchStr = searchStr.trim();

  if (searchStr!=null && this.validateInput(searchStr)){
     var foundRecords = this.items.filter((x:any) => {
     return x.name.toLowerCase().match(searchStr.toLowerCase()); 
    });
    this.visibleItems=foundRecords;
  } 
    else if (searchStr===''){
      this.visibleItems=this.items;
  }
}

validateInput(stringValue:any){
  var validRegex = new RegExp(/^[a-z ]+$/i);      
  return validRegex.test(stringValue)? this.isInputValid=true : this.isInputValid=false; 
}

}
