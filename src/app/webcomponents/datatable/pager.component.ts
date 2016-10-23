import {
  Component,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'pager',
  template: `
    <div>
      <ul>
        <li *ngFor="let page of getPages()">
          {{page}}
        </li>
      </ul>
    </div>
  `
})
export class PagerComponent {
  @Input() rowsPerPage: number = 3;
  @Input() numberRows: number = 0;

  private currentPage: number;
  private pages: Array<any>;

  constructor() {

  }

  getPages() {
    this.pages = this.generatePages();
    return this.pages;
  }

  generatePages() {
    let numberPages = Math.ceil(this.numberRows/this.rowsPerPage),
        pages = Array.apply(null, Array(numberPages));
    pages = pages.map((el, i) => i);
    return pages;
  }
}
