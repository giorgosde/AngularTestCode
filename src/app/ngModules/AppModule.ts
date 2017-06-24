import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, dTableComponent }  from '../ngComponents/ngComponents';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, dTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
