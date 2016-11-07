import { Component } from '@angular/core';

import { TradingReportComponent } from './pages/tradingreport.component';

@Component ({
  selector: 'content',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ContentComponent {}
