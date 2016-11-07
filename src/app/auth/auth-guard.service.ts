import { Injectable }       from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
// import { AuthService } from './auth.service';
import { SessionActions } from '../actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    // private authService: AuthService,
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private sessionActions: SessionActions) {}

  get isLoggedIn() {
    return this.ngRedux.getState().session.isLoggedIn;
  }

  get redirectUrl() {
    return this.ngRedux.getState().session.redirectUrl;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;
    this.sessionActions.setRedirectUrl(url);

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
