import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demanda-natural',
  templateUrl: './demanda-natural.component.html',
  styleUrls: ['./demanda-natural.component.css']
})
export class DemandaNaturalComponent implements OnInit {

  formularioNatural:FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formularioNatural = this.formBuilder.group({
      'nombre': [null, Validators.required],
      'apellido': [null, Validators.required],
      'direccion': [null, Validators.required],
      'identificacion': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'telefono': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],

    });

  }

  ngOnInit() {
  }


  log(){
    console.log(this.formularioNatural);
  }


  email = new FormControl('', [Validators.required, Validators.email]);

 getErrorMessage() {
   return this.email.hasError('required') ? 'Introduzca un email' :
          this.email.hasError('email') ? 'Email no vaildo' : '';
 }
}
