import { Component } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-generar-pdf',
  templateUrl: './generar-pdf.component.html',
  styleUrls: ['./generar-pdf.component.css']
})
export class GenerarPdfComponent {

  opcion:String = 'opcion1';




  log(){

    console.log(this.opcion);



  }






}
