import { Component, Input } from '@angular/core';

@Component({
  selector: 'dtable',
  templateUrl: './templates/dtable.html',
  styleUrls: ['./css/style.css'],
})
export class dTableComponent  {
  constructor(){};

  @Input() headerItmes:any;
  @Input() items:any;

sortTable(element:any){

this.items = this.items.sort(this.dynamicSort("phone"));
console.error("this.item", this.items);
}

dynamicSort(property:any) {
    return function (a:any, b:any) {
        var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
        return result;
    }
}


}
