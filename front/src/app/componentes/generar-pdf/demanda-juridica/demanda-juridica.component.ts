import { Component, OnInit,  AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { DepartamentosMunicipiosService } from '../../../services/departamentos-municipios/departamentos-municipios.service';
import { CedulaUsuarioService } from '../../../services/cedula-usuario.service';
import { DemandadojuridicoService } from '../../../services/demandadoJuridico/demandadojuridico.service';

@Component({
  selector: 'app-demanda-juridica',
  templateUrl: './demanda-juridica.component.html',
  styleUrls: ['./demanda-juridica.component.css']
})
export class DemandaJuridicaComponent implements OnInit,  AfterContentChecked {

  formularioJuridica: FormGroup;

  formularioRepresentante: FormGroup = this.formularioJuridica;

  // public listadoDepartamentos: any[] = [];
  // public listDepartamentosYMunicipios: any[];

  constructor(private formBuilder: FormBuilder, private departamentosMunicipiosService: DepartamentosMunicipiosService,
    public cedulaUsuarioService: CedulaUsuarioService, private demandadojuridicoService: DemandadojuridicoService ) {

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

  ngAfterContentChecked(): void {
   console.log(this.formularioJuridica.value.razonSocial);
   console.log(this.cedulaUsuarioService.obtenerCedual());

  }
  ngOnInit() {


    // this.departamentosMunicipiosService.getMunicipios()
    //   .subscribe(
    //     (res:any) => {
    //       this.listDepartamentosYMunicipios = res;
    //
    //       for(let dYM of this.listDepartamentosYMunicipios){
    //         this.listadoDepartamentos.push(dYM.departamento)
    //       }
    //       console.log(this.listadoDepartamentos)
    //
    //     },
    //     err => console.log(err)
    //   )


  }

  eventoHijoFormulario(e){
    this.formularioRepresentante = e;
  }


  log( checked ){

    /** if( checked ){
      console.log(this.formularioJuridica.value.razonSocial);
      console.log(this.formularioRepresentante);
    }else{
      console.log(this.formularioJuridica.value.razonSocial);
    }**/

    let urlDemandoInsert = 'https://laborappi.herokuapp.com/api/laborapp/demandado/guardar/empresa';

    const objetoDemandadoJuridico = {

      NItEmpresa: this.formularioJuridica.value.nit,
      nombreEmpresaRS: this.formularioJuridica.value.razonSocial,
      telefonoEmpresa: this.formularioJuridica.value.telefono ,
      emailEmpresa: this.formularioJuridica.value.email,
      direccionEmpresa: this.formularioJuridica.value.ubicacion.direccion,
      codigoDaneMunicipio: 90

    };

    this.demandadojuridicoService.enviarDemandadoJuridico(urlDemandoInsert, objetoDemandadoJuridico).subscribe(
      res => {
        console.log(res);
        // this.getGames();
      },
      err => console.error(err)
);




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
