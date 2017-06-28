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
  visibleItems: Array<any>;

sortTable(element:any, option:any){
  this.visibleItems = this.visibleItems.sort(Utils.compareValues(element.toLowerCase(), option));
}

ngOnInit(){
  this.visibleItems=this.items;
}

sendUserId(idValue:any){
  this.onIdSelect.emit(idValue);
}

filterTable(searchStr:any){
  var foundRecords = this.items.filter((x:any) => {
    return x.name.match(searchStr);
  });
  this.visibleItems=foundRecords;
}

}
