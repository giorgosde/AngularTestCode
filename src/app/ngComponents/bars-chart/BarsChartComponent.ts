import { Component, Input} from '@angular/core';

@Component({
  selector: 'bars-chart',
  templateUrl: './templates/bars-chart.html',
  styleUrls: ['./css/style.css'],
})
export class BarsChartComponent  {
@Input() statItems:any;
@Input() chartTitle:any;

constructor(){}

}