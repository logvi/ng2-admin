import { Component } from '@angular/core';

// components
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';

@Component({
    selector: 'app',
    template: `
        <div class="app">
          <header></header>
          <content></content>
        </div>
    `
})
export class AppComponent { }
