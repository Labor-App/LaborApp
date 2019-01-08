import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { DepartamentosMunicipiosService } from '../../../services/departamentos-municipios/departamentos-municipios.service';

@Component({
  selector: 'app-demanda-juridica',
  templateUrl: './demanda-juridica.component.html',
  styleUrls: ['./demanda-juridica.component.css']
})
export class DemandaJuridicaComponent implements OnInit {

  formularioJuridica:FormGroup;

  formularioRepresentante:FormGroup = this.formularioJuridica;


  public listDepartamentosYMunicipios: any[];

  constructor(private formBuilder: FormBuilder, private departamentosMunicipiosService: DepartamentosMunicipiosService) {

    this.formularioJuridica = this.formBuilder.group({
      'razonSocial':  [null, Validators.required],
      'nit':          [null,Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'telefono':     [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])],
      'email':        [null, Validators.compose([Validators.required, Validators.email])],
      'ubicacion':    this.formBuilder.group({
        'direccion':    [null, Validators.required],
        'departamento': [null, Validators.required],
        'municipio':    [null, Validators.required]
      })
    });

  }

  ngOnInit() {
    this.departamentosMunicipiosService.getMunicipios()
      .subscribe(
        (res:any) => {
        this.listDepartamentosYMunicipios = res;
        },
        err => console.log(err)
      )

  }

  eventoHijoFormulario(e){
    this.formularioRepresentante = e;
  }


  log( checked ){

    if( checked ){
      console.log(this.formularioJuridica.value);
      console.log(this.formularioRepresentante.value);
    }else{
      console.log(this.formularioJuridica.value);
    }


  }

  verificar( cheked ){
    if( cheked && (!this.formularioJuridica.valid || !this.formularioRepresentante.valid)){
      return true;
    }else if( !this.formularioJuridica.valid ){
      return true;
    }else{
      return false;
    }
  }




  getErrorMessage() {
    return this.formularioJuridica.get('email').hasError('required') ? 'Introduzca un email' :
          this.formularioJuridica.get('email').hasError('email') ? 'Email no vaildo' : '';
 }
}
