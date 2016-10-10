import {
  NgModule,
  Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    template: `
        <div>
          Hello World
        </div>
    `
})
class App {}

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [ App ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
