import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuariosService } from '../usuario/usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class DemandaPdfService {

  constructor(private http: HttpClient, private usuarioService: UsuariosService) { }

  private URL = 'https://back-laborapp.herokuapp.com/api/laborapp/pdf';

  httpOptions = {
    headers: new HttpHeaders({
      'token': `${ this.usuarioService.token }`
    })
  }

  generarPdf( nit ) {

    return this.http.get(`${ this.URL }/generar/empresa/${ nit }`, this.httpOptions);

  }


  enviarPdf() {

    return this.http.get(`${ this.URL }/enviar/${ this.usuarioService.usuario.cedulaPersona }`, this.httpOptions);

  }

  descargarPdf() {

    return this.http.get(`${ this.URL }/descargar/${ this.usuarioService.usuario.cedulaPersona }`, { headers: new HttpHeaders(
      {'token': `${ this.usuarioService.token }`}), responseType: 'blob' })

  }



}
