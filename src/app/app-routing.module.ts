import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard.component';
import { TradingReportComponent } from './admin/pages/tradingreport.component';

import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'tradingreport',
            component: TradingReportComponent
          }
        ]
      },
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: '', component: TradingReportComponent}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {}
