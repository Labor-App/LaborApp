import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// component
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';


const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'demanda', loadChildren: './componentes/demanda/demanda.module#DemandaModule'},
  {path: 'signup', component: SignUpComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
