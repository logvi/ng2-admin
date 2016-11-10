import { Component } from '@angular/core';

@Component ({
  selector: 'menu',
  template: `
    <div class="app-menu">
      <ul class="nav">
        <li *ngFor="let item of items">
          <a routerLink={{item.link}} routerLinkActive="active">
            <md-icon *ngIf="item.icon">{{item.icon}}</md-icon>{{item.title}}
          </a>
        </li>
      </ul>
    </div>
  `
})
export class MenuComponent {
  private items: Array<any>;

  constructor() {
    this.items = [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        link: '/admin/dashboard',
        children: []
      },
      {
        title: 'Clients',
        icon: 'people',
        link: '/admin/clients',
        children: []
      },
      {
        title: 'Managers',
        icon: 'people_outline',
        link: '/admin/managers',
        children: []
      },
      {
        title: 'Financial',
        icon: 'attach_money',
        link: '/admin/financial',
        children: [
          {
            title: 'Settings',
            icon: '',
            link: '/admin/financial/settings',
          },
          {
            title: 'Deposits',
            icon: '',
            link: '/admin/financial/deposits',
          },
          {
            title: 'Withdraws',
            icon: '',
            link: '/admin/financial/withdraws',
          },
        ]
      },
      {
        title: 'Trading Report',
        icon: 'view_list',
        link: '/admin/tradingreport',
        children: []
      },
      {
        title: 'Trading Game Reports',
        icon: 'view_list',
        link: '/admin/gamereports',
        children: [
          {
            title: 'WeekendBinary',
            icon: '',
            link: '/admin/financial/withdraws',
          },
          {
            title: 'WeekendForex',
            icon: '',
            link: '/admin/financial/withdraws',
          },
          {
            title: 'WallStRoulette',
            icon: '',
            link: '/admin/financial/withdraws',
          },
          {
            title: 'WallStBaccarat',
            icon: '',
            link: '/admin/financial/withdraws',
          },
        ]
      },
      {
        title: 'Servers List',
        icon: 'computer',
        link: '/admin/financial/withdraws',
        children: []
      },
    ];
  }
}
