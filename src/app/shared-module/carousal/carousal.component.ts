import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import * as M from 'assets/lib/materialize-css/dist/js/materialize.min.js';

// declare const $;

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  options = {
    fullWidth: true,
    indicators: true,
    duration: 100
  };

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }

}
