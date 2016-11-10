import { Component } from '@angular/core';

@Component({
  selector: 'revenue-chart',
  template: `
    <div>
      <chart [options]="options"></chart>
    </div>
  `
})
export class RevenueChartComponent {
  options: Object;

  constructor() {
    this.options = {
      title : { text : 'simple chart' },
      series: [{
          data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }
}
