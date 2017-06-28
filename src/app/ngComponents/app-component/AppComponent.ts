import { Component, Output, ViewChild } from '@angular/core';
import { ListService } from '../../ngServices/ngServices';

@Component({
  selector: 'app-component',
  templateUrl: './templates/app-component.html',
  styleUrls: ['./css/style.css'],
})
export class AppComponent  { 

@Output() dTableItems:any;
@Output() dTableHeaderItmes:any = ['Name', 'Email', 'Phone', 'Website']
@Output() selectedId:any;


constructor(public listService:ListService){
this.dTableItems =  listService.getUsers();
}

sendUserId(value:any){
this.selectedId = value;  
}

}
