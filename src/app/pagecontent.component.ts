import { Component } from '@angular/core';

import { DataTableComponent } from './webcomponents/datatable/datatable.component';


@Component ({
  selector: 'page-content',
  template: `
    <div>
      <div class="panel">
        <data-table
          [columns]="datatable.columns"
          [data]="datatable.data"
          [rowsPerPage]="3">
        </data-table>
        <button (click)="changeData()">change</button>
      </div>
    </div>
  `
})
export class PageContentComponent {
  datatable: any;

  constructor() {
    this.datatable = {
      columns: [
        {
          name: 'column 1'
        },
        {
          name: 'column 2'
        },
        {
          name: 'column 3'
        }
      ],
      data: [
        [1,6,'asd'],
        [0,1,'dfg'],
        [3,4,'sdgsg'],
        [7,6,'weeg'],
        [0,9,'dsgsdg'],
        [1,2,'wetth'],
        [6,7,'dsfg'],
        [4,3,'sdgfv'],
        [8,4,'oiifd']
      ]
    };
  }

  changeData() {
    this.datatable.data[0][2] = 'zzzz';
  }
}
