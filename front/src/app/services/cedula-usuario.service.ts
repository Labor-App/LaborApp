import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CedulaUsuarioService {

  constructor() { }

  public cedula = 0;

  guardarCedula(cedula): void {
  this.cedula = cedula;
  }
  obtenerCedual(): any {
    return this.cedula;


  }
}
