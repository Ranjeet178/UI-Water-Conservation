import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doughnut',
  template: `
  <div style="display: block">
  <canvas baseChart
  [data]="doughnutChartData"
  [labels]="doughnutChartLabel"
  [chartType]="doughnutChartType"></canvas>
  <div>
   `
  
})
export class DoughnutComponent implements OnInit {
    public doughnutChartLabel = ['Mon','Tue','wed','Thu','Fri','Sat','Sun'];
    public doughnutChartData = [120, 150,180,200,150,200,250];
    public doughnutChartType= 'doughnut';
constructor(){}

ngOnInit(){}
   
}
