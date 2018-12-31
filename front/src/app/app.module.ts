import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import { MaterialModule } from './material';

//Components
import { SignInComponent } from './sign-in/sign-in.component';
import { GenerarPdfComponent } from './generar-pdf/generar-pdf.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DemandaJuridicaComponent } from './generar-pdf/demanda-juridica/demanda-juridica.component';
import { DemandaNaturalComponent } from './generar-pdf/demanda-natural/demanda-natural.component';
import { RepresentanteComponent } from './generar-pdf/demanda-juridica/representante/representante.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GenerarPdfComponent,
    NavBarComponent,
    DemandaJuridicaComponent,
    DemandaNaturalComponent,
    RepresentanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
