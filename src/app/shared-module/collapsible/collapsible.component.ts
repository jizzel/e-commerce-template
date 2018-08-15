import { Component, OnInit } from '@angular/core';
import * as M from 'assets/lib/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {
  options = {};

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, this.options);
  }

}
