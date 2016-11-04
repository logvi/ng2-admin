import { Component } from '@angular/core';

import { TradingReportComponent } from './pages/tradingreport.component';

@Component ({
  selector: 'page-content',
  template: `
    <div>
      <trading-report></trading-report>
    </div>
  `
})
export class PageContentComponent {
}
