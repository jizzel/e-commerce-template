import { Component, OnInit } from '@angular/core';
import * as M from 'assets/lib/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = {};

  constructor() { }

  ngOnInit() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, this.options);
  }

}
