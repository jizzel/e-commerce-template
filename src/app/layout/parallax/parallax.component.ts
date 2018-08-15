import { Component, OnInit } from '@angular/core';
import * as M from 'assets/lib/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
  options = {};

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, this.options);
  }

}
