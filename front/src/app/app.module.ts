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
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { GenerarPdfComponent } from './componentes/generar-pdf/generar-pdf.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { DemandaJuridicaComponent } from './componentes/generar-pdf/demanda-juridica/demanda-juridica.component';
import { DemandaNaturalComponent } from './componentes/generar-pdf/demanda-natural/demanda-natural.component';
import { RepresentanteComponent } from './componentes/generar-pdf/demanda-juridica/representante/representante.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { NomApeGeneComponent } from './componentes/sign-up/nom-ape-gene/nom-ape-gene.component';
import { DocumentoComponent } from './componentes/sign-up/documento/documento.component';
import { FechaNacimientoComponent } from './componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component';
import { CorreoContraComponent } from './componentes/sign-up/correo-contra/correo-contra.component';

// servicios
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './services/usuarios.service';
import { DepartamentosMunicipiosService } from './services/departamentos-municipios/departamentos-municipios.service';

import { DemandadojuridicoService } from './services/demandadoJuridico/demandadojuridico.service';

import { DemandaPdfService } from './services/demandaPdf/demanda-pdf.service';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GenerarPdfComponent,
    NavBarComponent,
    DemandaJuridicaComponent,
    DemandaNaturalComponent,
    RepresentanteComponent,
    SignUpComponent,
    NomApeGeneComponent,
    DocumentoComponent,
    FechaNacimientoComponent,
    CorreoContraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],

  providers: [UsuariosService, DepartamentosMunicipiosService, DemandadojuridicoService, DemandaPdfService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
