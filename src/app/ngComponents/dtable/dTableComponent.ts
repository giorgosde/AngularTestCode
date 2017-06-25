import { Component, Input } from '@angular/core';
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

sortTable(element:any, option:any){
  this.items = this.items.sort(Utils.compareValues(element.toLowerCase(), option));
}
}
