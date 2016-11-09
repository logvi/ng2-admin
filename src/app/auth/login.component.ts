import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

import { SessionActions } from '../actions';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store';
import { Observable } from 'rxjs/Observable';

@Component({
  providers: [ SessionActions ],
  template: `
    <div class="login-page flex-center">
      <md-card>
        <md-card-title>Login</md-card-title>
        <md-card-content>
          <md-input placeholder="Username"></md-input>
          <md-input placeholder="Password"></md-input>
        </md-card-content>
        <md-card-actions>
          <button md-raised-button color="primary" (click)="login()" >Sign in</button>
        </md-card-actions>
      </md-card>
    </div>
    `
})

export class LoginComponent {
  @select(['session','isLoggedIn']) private isLoggedIn$: Observable<boolean>;
  @select(s => !s.session.isLoggedIn) private isLoggedOut$: Observable<boolean>;

  message: string;

  get isLoggedIn() {
    return this.ngRedux.getState().session.isLoggedIn;
  }

  get redirectUrl() {
    return  this.ngRedux.getState().session.redirectUrl;
  }

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
          let redirect = this.redirectUrl;
          // Redirect the user
          this.router.navigate([redirect]);
        }
    });
  }

  setMessage() {
    this.message = 'Logged ' + (this.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.actions.setCredentials({
      profile: {
        firstName: 'Demo',
        lastName: ''
      }
    });
  }

  logout() {
    this.setMessage();
  }
}
