import { Component } from '@angular/core';

@Component ({
  selector: 'menu',
  template: `
    <div class="app-menu">
      <ul class="nav">
        <li>
          <a routerLink="/admin/dashboard" routerLinkActive="active">Dashboard</a>
        </li>
        <li>
          <a routerLink="/" routerLinkActive="active">Trading Report</a>
        </li>
      </ul>
    </div>
  `
})
export class MenuComponent {

}
