import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//componet
import { SignInComponent } from './sign-in/sign-in.component';
import { GenerarPdfComponent } from './componentes/generar-pdf/generar-pdf.component';
const routes: Routes = [
  {path:"", component:/* SignInComponent*/ GenerarPdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
