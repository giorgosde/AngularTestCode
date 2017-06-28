import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent, dTableComponent }  from '../ngComponents/ngComponents';
import { ListService } from '../ngServices/ngServices';

@NgModule({
  imports:      [ BrowserModule, HttpModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, dTableComponent ],
  providers:    [ListService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
