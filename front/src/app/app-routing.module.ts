import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//componet
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:"Sign-in", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
