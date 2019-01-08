import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
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


 constructor(private usuariosService: UsuariosService) {}
  ngOnInit() {}


  // Se envía el
MostrarNombreVisual(datosFormNombreApe): void {
console.log(datosFormNombreApe);
this.nombreApeVisual = false;
this.documentoVisual  = true;
this.fechaNacivisuai  = false;
this.correoContraseVisua  = false ;


}


mostrarDocumento(datosFormCedula): void {
  console.log(datosFormCedula);
  this.nombreApeVisual = false;
  this.documentoVisual  = false;
  this.fechaNacivisuai  = true;
  this.correoContraseVisua  = false ;
  }

  mostrarcorreoContra(datofechaNacimiento): void {
    console.log(datofechaNacimiento);
    this.nombreApeVisual = false;
    this.documentoVisual  = false;
    this.fechaNacivisuai  = false;
    this.correoContraseVisua  = true ;
    }

    recibeCorreoContra(datoCorreoContrase): void {
    console.log(datoCorreoContrase);
    console.log('último formulario capturado');

    this.usuariosService.enviarUsuarios('https://laborappi.herokuapp.com/api/laborapp', datoCorreoContrase);


    }






}
