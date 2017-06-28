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
  
  @Output() onIdSelect: EventEmitter<number> = new EventEmitter<number>();
  sortOptions:any =[{text:"Ascending", value:"asc"},{text:"Descending", value:"desc"}];
  searchString:any;

sortTable(element:any, option:any){
  this.items = this.items.sort(Utils.compareValues(element.toLowerCase(), option));
}

sendUserId(idValue:any){
  this.onIdSelect.emit(idValue);
}

filterTable(criteria:any){
  var itemsJSON = JSON.stringify(this.items);
  var res = itemsJSON.match(criteria);
console.error("result:", res);
}

}
