import { Component } from '@angular/core';

@Component({
  selector: 'revenue',
  template: `
    <md-card>
      <md-card-title>Revenue</md-card-title>
      <md-card-content>
        <revenue-chart></revenue-chart>
      </md-card-content>
    </md-card>
  `
})
export class RevenueComponent {

}
