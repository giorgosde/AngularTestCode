import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stats-stage',
  templateUrl: './templates/stats-stage.html',
  styleUrls: ['./css/style.css'],
})
export class StatsStageComponent  {

barItems:any = [{key:"Greece", value:"80"},
                {key:"USA", value:"150"},
                {key:"Brazil", value:"160"},
                {key:"Canada", value:"230"}];
constructor(){}

}