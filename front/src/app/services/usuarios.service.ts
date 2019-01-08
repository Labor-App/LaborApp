import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {

   }

    // UrlApiCiudadCol = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
    // Url: any = this.UrlApiCiudadCol;

   getUsuarios(url: string): any {

    return this.http.get(url);

   }

   enviarUsuarios(url: string, usuario: Usuario): any {
     return this.http.post(url, usuario);

   }


}
