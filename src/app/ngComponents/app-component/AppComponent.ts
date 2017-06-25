import { Component, Output } from '@angular/core';
import { ListService } from '../../ngServices/ngServices';

@Component({
  selector: 'app-component',
  templateUrl: './templates/app-component.html',
  styleUrls: ['./css/style.css'],
})
export class AppComponent  { 

@Output() dTableItems:any;

constructor(public listService:ListService){
this.dTableItems =  listService.getUsers();
}


}
