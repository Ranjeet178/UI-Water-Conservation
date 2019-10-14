import { Component } from "@angular/core";
@Component({
  selector: "fusion",
  template: `<h1>
  {{title}}
</h1>
<fusioncharts
  width="450"
  height="250"
  type="AngularGauge"
  [dataSource]="dataSource"
>
</fusioncharts>
`
})
export class FusionComponent {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: "Nordstrom's Customer Satisfaction Score for 2017",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0"
      },
      // Gauge Data
      colorRange: {
        color: [
          {
            minValue: "0",
            maxValue: "50",
            code: "#F2726F"
          },
          {
            minValue: "50",
            maxValue: "75",
            code: "#FFC533"
          },
          {
            minValue: "75",
            maxValue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    }; // end of this.dataSource
  } // end of constructor
} // end of class AppComponent