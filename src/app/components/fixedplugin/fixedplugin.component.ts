import { Component, OnInit } from '@angular/core';
import * as M from 'assets/lib/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-fixedplugin',
  templateUrl: './fixedplugin.component.html',
  styleUrls: ['./fixedplugin.component.css']
})
export class FixedpluginComponent implements OnInit {
  options = {};

  constructor() { }

  ngOnInit() {
    let elems = document.querySelectorAll('.tap-target');
    let instances = M.TapTarget.init(elems, this.options);

    // let instance = M.TapTarget.getInstance(elems);
    // instance.next();
  }

}
