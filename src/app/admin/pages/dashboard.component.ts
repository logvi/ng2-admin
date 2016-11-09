import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
     <div class="total-container">
      <md-card *ngFor="let item of totalValues">
        <md-card-title>{{item.name}}</md-card-title>
        <md-card-content>
          <div class="total-value">{{item.value}}</div>
          <div class="total-value-growth" *ngIf="item.hasOwnProperty('value_change')">{{item.value_change}}</div>
        </md-card-content>
      </md-card>
    </div>
  `
})
export class DashboardComponent {
  private totalValues: Array<any>;

  constructor() {
    this.totalValues = [
      {
        name: 'Registrations',
        value: 0,
        value_change: 0,
      },
      {
        name: 'Avg Daily Users',
        value: 0,
        value_change: 0,
      },
      {
        name: 'Deposits',
        value: 0,
        value_change: 0,
      },
      {
        name: 'Withdrawals',
        value: 0,
        value_change: 0,
      },
    ];
  }
}
