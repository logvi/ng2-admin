import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class SessionActions {
  static LOGIN_USER = 'LOGIN_USER';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
  static LOGOUT_USER = 'LOGOUT_USER';
  static SET_CREDENTIALS = 'SET_CREDENTIALS';
  static SET_REDIRECT_URL = 'SET_REDIRECT_URL';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  loginUser(credentials) {
    this.ngRedux.dispatch({
      type: SessionActions.LOGIN_USER,
      payload: credentials,
    });
  };

  logoutUser() {
    this.ngRedux.dispatch({ type: SessionActions.LOGOUT_USER });
  };

  setCredentials(profile) {
    window.setTimeout(() => {
      this.ngRedux.dispatch({
        type: SessionActions.SET_CREDENTIALS,
        payload: profile,
      });
    }, 1000);
  }

  setRedirectUrl(url) {
    this.ngRedux.dispatch({
      type: SessionActions.SET_REDIRECT_URL,
      payload: url,
    })
  }
}
