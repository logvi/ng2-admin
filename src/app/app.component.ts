import { Component } from '@angular/core';

// components
import { DataTableComponent } from './webcomponents/datatable/datatable.component';

@Component({
    selector: 'app',
    template: `
        <div>
          Hello World! s
          <data-table></data-table>
        </div>
    `
})
export class AppComponent {}
