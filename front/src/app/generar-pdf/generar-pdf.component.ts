import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-generar-pdf',
  templateUrl: './generar-pdf.component.html',
  styleUrls: ['./generar-pdf.component.css']
})
export class GenerarPdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  email = new FormControl('', [Validators.required, Validators.email]);

 getErrorMessage() {
   return this.email.hasError('required') ? 'Introduzca un email' :
       this.email.hasError('email') ? 'Email no vaildo' :
           '';
 }

}
