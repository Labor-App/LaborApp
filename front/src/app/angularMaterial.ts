import { NgModule } from '@angular/core';

//Compunents
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule],
})
export class angularMaterialModule{}
