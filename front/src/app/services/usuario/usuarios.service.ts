import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario: Usuario;
  token: string;

  private URL: any = 'https://laborappi.herokuapp.com/api/laborapp/usuario';

  constructor(private http: HttpClient, private router: Router) {
    this.refreshPage();
  }

  estaLogeado(){
    return (this.token.length > 5 ) ? true : false;
  }

  refreshPage(){
    if(localStorage.getItem('token')){

      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    }else{
      this.token = '';
      this.usuario = null;
    }
  }

  guardarEnStorage(id: string, token: string, usuario: Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify( usuario ));

    this.usuario = usuario;
    this.token = token;
  }

  logoutUsuario(){
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  loginUsuario(credenciales: object){
    return this.http.post(`${this.URL}/login`, credenciales)
      .pipe(
        map( (res: any) => {

          if (!res['ok']){
            return false;
          }

          this.guardarEnStorage(res.usuario.correoPersona, res.token, res.usuario);
          return true;

        })
      )
  }



  guardarUsuarios(usuario: Usuario): any {
    return this.http.post(`${this.URL}/guardar`, usuario);
  }


}
