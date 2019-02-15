import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../usuario/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private usuarioService: UsuariosService, private router: Router){}

  canActivate(){

    if(this.usuarioService.estaLogeado()){

      console.log('Paso Por El guard')

      return true;
    }else{
      console.log('reschazado por el guard');
      this.router.navigate(['/login'])
      return false;
    }

  }
}
