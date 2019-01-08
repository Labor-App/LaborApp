import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// component
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { GenerarPdfComponent } from './componentes/generar-pdf/generar-pdf.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';




const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'pdf', component: GenerarPdfComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
