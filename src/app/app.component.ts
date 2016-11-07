import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { IAppState, ISession, rootReducer } from './store';
import { middleware, enhancers, reimmutify } from './store';

@Component({
    selector: 'app',
    template: `
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter )
  {
    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
    ngReduxRouter.initialize();
  }
}
