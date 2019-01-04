import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-nacimiento',
  templateUrl: './fecha-nacimiento.component.html',
  styleUrls: ['./fecha-nacimiento.component.css']
})
export class FechaNacimientoComponent implements OnInit {
  minDate = new Date(2018, 10, 19);
  maxDate = new Date(2018, 11, 6);

  constructor() { }

  ngOnInit() {
  }

}
