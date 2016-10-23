import { Component } from '@angular/core';

import { MenuComponent } from './menu.component';
import { PageContentComponent } from './pagecontent.component';

@Component ({
  selector: 'content',
  template: `
    <div class="app-content">
      <menu></menu>
      <page-content class="page-content"></page-content>
    </div>
  `
})
export class ContentComponent {

}
