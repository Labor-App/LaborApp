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

import { MdbModule } from './mdb';


//Components
import { SignInComponent } from './sign-in/sign-in.component';
import { GenerarPdfComponent } from './componentes/generar-pdf/generar-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GenerarPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MdbModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
