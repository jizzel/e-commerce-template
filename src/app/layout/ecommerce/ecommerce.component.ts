import { Component, OnInit } from '@angular/core';
import * as M from 'assets/lib/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  options = {};

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, this.options);
  }

}
