import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListService } from '../../ngServices/ngServices';

@Component({
  selector: 'client-stage',
  templateUrl: './templates/client-stage.html',
  styleUrls: ['./css/style.css'],
})
export class ClientStageComponent  {
 
@Output() dTableItems:any;
@Output() dTableHeaderItmes:any = ['Name', 'Email', 'Phone', 'Username']
@Output() selectedId:any;

constructor(public listService:ListService){
  this.dTableItems =  listService.getUsers();
}

sendUserId(value:any){
  this.selectedId = value;  
}

}
