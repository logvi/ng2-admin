import { Component, EventEmitter, Input} from '@angular/core';

@Component ({
  selector: 'header',
  outputs: ['onClickToolbarMenu'],
  template: `
    <md-toolbar color="primary">

      <button class="app-icon-button" (click)="toolbarMenuClicked($event)">
        <i class="material-icons app-toolbar-menu">menu</i>
      </button>

      <div class="app-header">
        <div class="app-header__left">
          <div class="company-name">
            <a>CANDLEBETS</a>
          </div>
        </div>
        <div class="app-header__right">
          {{userName}}
        </div>
      </div>
    </md-toolbar>
  `
})
export class HeaderComponent {
  @Input() private userName: string = 'test';
  onClickToolbarMenu: EventEmitter<any>;

  constructor() {
    this.onClickToolbarMenu = new EventEmitter<any>();
  }

  toolbarMenuClicked(event: any): void {
    this.onClickToolbarMenu.emit(event);
    event.preventDefault();
  }
}
