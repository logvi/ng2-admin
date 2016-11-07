import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

import { SessionActions } from '../actions';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store';
import { Observable } from 'rxjs/Observable';

@Component({
  providers: [ SessionActions ],
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
    {{isLoggedIn$ | async}}
      <button (click)="login()"  *ngIf="isLoggedOut$ | async">Login</button>
      <button (click)="logout()" *ngIf="isLoggedIn$ | async">Logout</button>
    </p>`
})

export class LoginComponent {
  @select(['session','isLoggedIn']) private isLoggedIn$: Observable<boolean>;
  @select(s => !s.session.isLoggedIn) private isLoggedOut$: Observable<boolean>;

  message: string;

  constructor(
    // public authService: AuthService,
    public router: Router,
    private actions: SessionActions,
    private ngRedux: NgRedux<IAppState>) {
    this.setMessage();
    this.isLoggedIn$.subscribe((isLoggedIn) => {
        this.setMessage();
        if (isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.ngRedux.getState().session.redirectUrl;
          // Redirect the user
          this.router.navigate([redirect]);
        }
    });
  }

  get isLoggedIn() {
    return this.ngRedux.getState().session.isLoggedIn;
  }

  setMessage() {
    this.message = 'Logged ' + (this.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.actions.setCredentials({
      profile: {
        firstName: 'Vasya',
        lastName: ''
      }
    });
  }

  logout() {
    this.setMessage();
  }
}
