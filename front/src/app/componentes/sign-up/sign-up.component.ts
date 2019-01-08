import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { CedulaUsuarioService } from '../../services/cedula-usuario.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

nombreApeVisual: boolean = true;
documentoVisual: boolean = false;
fechaNacivisuai: boolean = false;
correoContraseVisua: boolean = false ;
datosForm1: any;
datosForm2: any;
datosForm3: any;
datosForm4: any;


 constructor(private usuariosService: UsuariosService, public cedulaUsuario: CedulaUsuarioService) {}
  ngOnInit() {}


  // Se envía el
MostrarNombreVisual(datosFormNombreApe): void {
console.log(datosFormNombreApe);

this.datosForm1 = datosFormNombreApe;
this.nombreApeVisual = false;
this.documentoVisual  = true;
this.fechaNacivisuai  = false;
this.correoContraseVisua  = false ;


}


mostrarDocumento(datosFormCedula: any): void {
  this.datosForm2 = datosFormCedula;
  console.log(datosFormCedula);
  this.nombreApeVisual = false;
  this.documentoVisual  = false;
  this.fechaNacivisuai  = true;
  this.correoContraseVisua  = false ;
  }

  mostrarcorreoContra(datofechaNacimiento): void {
    this.datosForm3 = datofechaNacimiento;
    console.log(datofechaNacimiento);
    this.nombreApeVisual = false;
    this.documentoVisual  = false;
    this.fechaNacivisuai  = false;
    this.correoContraseVisua  = true ;
    }

    recibeCorreoContra(datoCorreoContrase): void {
      this.datosForm4 = datoCorreoContrase;
    console.log(datoCorreoContrase);
    console.log('último formulario capturado');

    const informacionUsuario: Usuario = {


      cedulaPersona: this.datosForm2.cedulaUsuario,
      nombresPersona: this.datosForm1.nombreUs,
      apellidosPersona: this.datosForm1.apellidoUs,
      fechaNacimientoPersona: this.datosForm3.fechaNacimiento,
      correoPersona: this.datosForm4.correoUs,
      codigoDaneMunicipio: 6768
    };

    this.cedulaUsuario.guardarCedula(this.datosForm2.cedulaUsuario);

    this.usuariosService.enviarUsuarios('https://laborappi.herokuapp.com/api/laborapp/usuario/guardar', informacionUsuario).subscribe(
      res => {
        console.log(res);
        // this.getGames();
      },
      err => console.error(err)
);


    }






}



/**
 * Form 1

nombreUs:
apellidoUs:
ciudadUs:


Form2

generoUsuario: 
cedulaUsuario: 
lugarUsuario: 


Form 3 

fechaNacimiento: 

Form 4 

correoUs:
keyUs: 
againKeyUs:  
 * 
 * 
 */
