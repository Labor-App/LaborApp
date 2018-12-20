import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demanda-juridica',
  templateUrl: './demanda-juridica.component.html',
  styleUrls: ['./demanda-juridica.component.css']
})
export class DemandaJuridicaComponent implements OnInit {

  formularioJuridica:FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.formularioJuridica = this.formBuilder.group({
      'razonSocial': [null, Validators.required],
      'nit': [null,Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'direccion': [null, Validators.required],
      'telefono': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],


    });

  }


  log(){
    console.log(this.formularioJuridica);
  }


  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

 getErrorMessage() {
   return this.email.hasError('required') ? 'Introduzca un email' :
          this.email.hasError('email') ? 'Email no vaildo' : '';
 }
}
