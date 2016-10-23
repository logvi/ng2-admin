import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';
import { MenuComponent } from './menu.component';
import { PageContentComponent } from './pagecontent.component';

// modules
import DataTableModule from './webcomponents/datatable';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule
  ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
