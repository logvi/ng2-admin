import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { ISession } from '../store';
import { Observable } from 'rxjs/Observable';

// components
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';

@Component({
    selector: 'admin',
    template: `
      <div class="app">
        <header [userName]="userName$ | async" (onClickToolbarMenu)="menu.toggle()"></header>
        <div class="app-content">
          <md-sidenav-layout>
            <md-sidenav #menu opened mode="side">
              <menu></menu>
            </md-sidenav>

            <content class="page-content"></content>
          </md-sidenav-layout>
        </div>
      </div>
    `
})
export class AdminComponent {
  @select(['session', 'user', 'firstName']) private userName$: Observable<string>;
}
