import { Component, OnInit } from '@angular/core';
import * as M from 'assets/lib/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  options = {};

  constructor() { }

  ngOnInit() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, this.options);
  }

}
