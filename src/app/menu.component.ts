import { Component } from '@angular/core';

@Component ({
  selector: 'menu',
  template: `
    <div class="app-menu">
      <ul class="nav">
        <li>
          <a>link 1</a>
        </li>
        <li>
          <a>link 2</a>
        </li>
        <li>
          <a>link 3</a>
          <ul>
            <li>
              <a>sublink 1</a>
            </li>
            <li>
              <a>sublink 2</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `
})
export class MenuComponent {

}
