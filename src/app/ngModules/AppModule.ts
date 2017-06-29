import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent, dTableComponent, PersonalInfoModalComponent, 
         ClientStageComponent, DummyStageComponent }  from '../ngComponents/ngComponents';
import { ListService } from '../ngServices/ngServices';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, dTableComponent, PersonalInfoModalComponent,  
                 ClientStageComponent, DummyStageComponent ],
  providers:    [ListService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
