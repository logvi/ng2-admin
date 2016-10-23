import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableComponent } from './datatable.component';
import { PagerComponent } from './pager.component';

@NgModule({
  declarations: [
    DataTableComponent,
    PagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataTableComponent
  ],
})
export class DataTableModule {}
