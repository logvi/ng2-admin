import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/header.component';
import { ContentComponent } from './admin/content.component';
import { MenuComponent } from './admin/menu.component';
import { DashboardComponent } from './admin/pages/dashboard.component';
import { TradingReportComponent, DataService } from './admin/pages/tradingreport.component';

// modules
import DataTableModule from './webcomponents/datatable';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './auth/login-routing.module';
import { MaterialModule } from '@angular/material';
import { NgReduxModule, DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { ChartModule } from 'angular2-highcharts';

// providers
import { SessionActions } from './actions';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    TradingReportComponent,
    DashboardComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule,
    MaterialModule.forRoot(),
    LoginRoutingModule,
    AppRoutingModule,
    NgReduxModule.forRoot(),
    ChartModule,
  ],
  providers: [
    DataService,
    NgRedux,
    NgReduxRouter,
    SessionActions,
  ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
