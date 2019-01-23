import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Custom module
import { DemandaRoutingModule } from './demanda-routing.module';
import { MaterialModule } from '../../material';

//Componentes
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DatosDemandadoComponent } from './datos-demandado/datos-demandado.component';
import { DemandaJuridicaComponent } from './datos-demandado/demanda-juridica/demanda-juridica.component';
import { RepresentanteComponent } from './datos-demandado/demanda-juridica/representante/representante.component';
import { DemandaNaturalComponent } from './datos-demandado/demanda-natural/demanda-natural.component';



@NgModule({
  declarations: [
    DatosDemandadoComponent,
    DemandaJuridicaComponent,
    DemandaNaturalComponent,
    RepresentanteComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    DemandaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DemandaModule { }
