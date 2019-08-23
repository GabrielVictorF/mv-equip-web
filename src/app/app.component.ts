import { Component } from '@angular/core';

declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      let options = {
        hover: true
      }
      var instances = M.Dropdown.init(elems, options);
    });
  }
}
  