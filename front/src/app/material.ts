import { NgModule } from '@angular/core';

import * as Material from '@angular/material';


@NgModule({
  imports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule    

  ],
  exports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule

  ],
})
export class MaterialModule{}
