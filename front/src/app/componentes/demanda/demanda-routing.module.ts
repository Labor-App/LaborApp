import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DatosDemandadoComponent } from './datos-demandado/datos-demandado.component';

const routes: Routes = [
  { path: '', component: DatosDemandadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandaRoutingModule { }
