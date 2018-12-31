import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demanda-juridica',
  templateUrl: './demanda-juridica.component.html',
  styleUrls: ['./demanda-juridica.component.css']
})
export class DemandaJuridicaComponent implements OnInit {

  formularioJuridica:FormGroup;

  formularioRepresentante:FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);

  emailRepresentante: FormControl;

  constructor(private formBuilder: FormBuilder) {

    this.formularioJuridica = this.formBuilder.group({
      'razonSocial': [null, Validators.required],
      'nit': [null,Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'direccion': [null, Validators.required],
      'telefono': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],


    });

  }

  eventoHijoFormulario(e){
    this.formularioRepresentante = e;
  }

  eventoHijoEmail(e){
    this.emailRepresentante = e;
  }

  log(){
    console.log(this.formularioJuridica.get('razonSocial').valid)
  }

  verificar( cheked ){
    if( cheked && (!this.formularioJuridica.valid || !this.formularioRepresentante.valid || this.email.invalid || this.emailRepresentante.invalid)){
      return true;
    }else if( !this.formularioJuridica.valid || this.email.invalid ){
      return true;
    }else{
      return false;
    }
  }


  ngOnInit() {
  }


 getErrorMessage() {
   return this.email.hasError('required') ? 'Introduzca un email' :
          this.email.hasError('email') ? 'Email no vaildo' : '';
 }
}
