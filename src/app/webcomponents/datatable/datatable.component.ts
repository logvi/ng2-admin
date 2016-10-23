import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

// services
import { LoggerService } from './logger.service';

// interfaces
import { IColumn } from './interfaces/column.interface';

// classes
import { DataSource } from './classes/datasource.class';
import { Pager } from './classes/pager.class';

// components
import { PagerComponent } from './pager.component';

interface DataTableOptionsInterface {
  rowsPerPage?: number;
  order?: {
    column: number;
    dir: string;
  },
  applyStyles?: boolean;
}

@Component ({
  selector: 'data-table',
  providers: [LoggerService],
  template: `
    <div class="data-table-header">
      <!--<button (click)="setFilter()">Filter</button>
      <button (click)="changeData()">Change</button>-->
    </div>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <td *ngFor="let column of columns"
                (click)="orderBy(column.data)">
                {{column.name}}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let values of getData()">
            <td *ngFor="let value of values">{{value}}</td>
          <tr>
        </tbody>
      </table>
    </div>
    <div class="data-table-footer">
      <!--<pager
        [rowsPerPage]="rowsPerPage"
        [numberRows]="dataSource.getTotalLength()">
      </pager>-->
    </div>
  `
})
export class DataTableComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() columns: Array<IColumn>;
  @Input() data: Array<any>;
  @Input() private rowsPerPage: number;

  // private options: DataTableOptionsInterface;
  private dataSource: DataSource;
  // private pager: Pager;
  private currentPage: number = 0;
  private test = [1,2];
  logs: string[];

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  ngOnInit() {
    this.columns.map((col, index) => {
      col.data = index;
      return col;
    })
    this.dataSource = new DataSource(this.data);
    // this.pager = new Pager({
    //   currentPage: this.currentPage,
    //   rowsPerPage: this.rowsPerPage
    // });
    console.log('ngOnInit');
  }

  ngOnChanges(...args) {
    console.log('ngOnChanges',args);
  }

  ngDoCheck(...args) {
    console.log('ngDoCheck',args);
  }

  ngAfterContentInit(...args) {
    console.log('ngAfterContentInit',args);
  }

  ngAfterContentChecked(...args) {
    console.log('ngAfterContentChecked',args);
  }

  ngAfterViewInit(...args) {
    console.log('ngAfterViewInit',args);
  }

  ngAfterViewChecked(...args) {
    console.log('ngAfterViewChecked',args);
  }

  orderBy(column) {
    this.dataSource.orderBy(column);
  }

  getData() {
    console.log('getData');
    let newData = this.dataSource.getData().slice(this.currentPage*3, this.currentPage*3 + 3);
    return newData;
    // return this.test;
  }

  changeData() {
    // this.dataSource.changeData();
  }

  nextPage() {
    this.currentPage++;
  }

  setFilter() {
    // this.dataSource.setFilter({column:0, search: 0});
  }
}
