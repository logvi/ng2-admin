import { Component } from '@angular/core';

@Component ({
  selector: 'header',
  template: `
    <div class="app-header">
      <div class="app-header__left">
        <div class="company-name">
          CANDLEBETS
        </div>
        <div class="hamburger">
          <span></span>
        </div>
      </div>
    </div>
  `
})
export class HeaderComponent {}
