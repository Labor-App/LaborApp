import { NgModule } from '@angular/core';

import * as Material from '@angular/material';


@NgModule({
  imports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule,
    Material.MatSidenavModule ,
    Material.MatToolbarModule,
    Material.MatListModule,
    Material.MatSelectModule

  ],
  exports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatGridListModule,
    Material.MatSnackBarModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatListModule,
    Material.MatSelectModule

  ],
})
export class MaterialModule{}
