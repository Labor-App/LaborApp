import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit {

  public formularioRepresentante:FormGroup;

  @Output() representanteFormulario = new EventEmitter();
  @Output() representanteEmail = new EventEmitter();




  constructor(private formBuilder:FormBuilder ){

    this.formularioRepresentante = formBuilder.group({
      'nombre': [null, Validators.required],
      'apellido': [null, Validators.required],
      'identificacion': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
    })

  }

  ngOnInit(){
    this.representanteFormulario.emit(this.formularioRepresentante);
    this.representanteEmail.emit(this.email);
  }

  ngAfterContentChecked(){

    this.representanteFormulario.emit(this.formularioRepresentante);
    this.representanteEmail.emit(this.email);

  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Introduzca un email' :
          this.email.hasError('email') ? 'Email no vaildo' : '';
 }
}
