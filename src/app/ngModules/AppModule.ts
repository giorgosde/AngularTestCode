import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, dTableComponent, PersonalInfoModalComponent, 
         ClientStageComponent, PostStageComponent, PostThumbnailComponent }  from '../ngComponents/ngComponents';
import { ListService } from '../ngServices/ngServices';

const appRoutes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientStageComponent },
  { path: 'posts',      component: PostStageComponent }];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, dTableComponent, PersonalInfoModalComponent,  
                 ClientStageComponent, PostStageComponent, PostThumbnailComponent ],
  providers:    [ListService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
