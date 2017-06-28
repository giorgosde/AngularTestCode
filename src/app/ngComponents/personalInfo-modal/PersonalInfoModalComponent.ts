import { Component, Input } from '@angular/core';

@Component({
  selector: 'personalInfo-modal',
  templateUrl: './templates/personalInfo-modal.html',
  styleUrls: ['./css/style.css'],
})
export class PersonalInfoModalComponent  {
  @Input() user:any;
  constructor(){};
}
