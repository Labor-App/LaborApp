import { NgModule } from '@angular/core';

import * as Material from '@angular/material';


@NgModule({
  imports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatFormFieldModule

  ],
  exports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatFormFieldModule

  ],
})
export class MaterialModule{}
