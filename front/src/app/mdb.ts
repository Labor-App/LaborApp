
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//Components
import { SignInComponent } from './sign-in/sign-in.component';
import { GenerarPdfComponent } from './componentes/generar-pdf/generar-pdf.component';

@NgModule({
  imports: [
          MDBBootstrapModule.forRoot()
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
})
export class MdbModule { }
