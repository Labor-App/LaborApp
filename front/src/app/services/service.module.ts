import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  CedulaUsuarioService,
  DemandadoService,
  DemandaPdfService,
  UsuariosService,
  DepartamentosMunicipiosService,
  LoginGuard,
  } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CedulaUsuarioService,
    DemandadoService,
    DemandaPdfService,
    UsuariosService,
    DepartamentosMunicipiosService,
    LoginGuard
  ]
})
export class ServiceModule { }
