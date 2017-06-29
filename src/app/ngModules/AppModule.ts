import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, dTableComponent, PersonalInfoModalComponent, 
         ClientStageComponent, DummyStageComponent }  from '../ngComponents/ngComponents';
import { ListService } from '../ngServices/ngServices';

const appRoutes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'client', component: ClientStageComponent },
  { path: 'dummy',      component: DummyStageComponent }];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, dTableComponent, PersonalInfoModalComponent,  
                 ClientStageComponent, DummyStageComponent ],
  providers:    [ListService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
