
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { MaterialModule } from './material';

//Components
import { AppComponent } from './app.component';
import { SignInComponent } from './componentes/sign-in/sign-in.component';
import { SignUpComponent } from './componentes/sign-up/sign-up.component';
import { NomApeGeneComponent } from './componentes/sign-up/nom-ape-gene/nom-ape-gene.component';
import { DocumentoComponent } from './componentes/sign-up/documento/documento.component';
import { FechaNacimientoComponent } from './componentes/sign-up/fecha-nacimiento/fecha-nacimiento.component';
import { CorreoContraComponent } from './componentes/sign-up/correo-contra/correo-contra.component';
import { DemandaComponent } from './componentes/demanda/demanda.component';

// servicios
import { UsuariosService } from './services/usuario/usuarios.service';
import { DepartamentosMunicipiosService } from './services/departamentos-municipios/departamentos-municipios.service';
import { DemandadojuridicoService } from './services/demandadoJuridico/demandadojuridico.service';
import { DemandaPdfService } from './services/demandaPdf/demanda-pdf.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NomApeGeneComponent,
    DocumentoComponent,
    FechaNacimientoComponent,
    CorreoContraComponent,
    DemandaComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register(/*'ngsw-worker.js'*/'sw.js', { enabled: environment.production }),


  ],

  providers: [UsuariosService, DepartamentosMunicipiosService, DemandadojuridicoService, DemandaPdfService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
