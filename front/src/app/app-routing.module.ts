import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// component
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { DemandaComponent } from './componentes/demanda/demanda.component';

const routes: Routes = [
  {path: '', component: SignInComponent},
  {
    path: 'demanda',
    component: DemandaComponent,
    loadChildren: './componentes/demanda/demanda.module#DemandaModule'
  },
  {path: 'signup', component: SignUpComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{useHash: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
