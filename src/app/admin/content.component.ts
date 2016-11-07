import { Component } from '@angular/core';

@Component ({
  selector: 'content',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ContentComponent {}
