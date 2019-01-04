import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

nombreApeVisual: boolean = true;
documentoVisual: boolean = false;
fechaNacivisuai: boolean = false;
correoContraseVisua: boolean = false ;


  constructor() { }
  ngOnInit() {}

  MostrarNombreVisual(Btn_nombreApeVisual): void {
console.log(Btn_nombreApeVisual);
this.nombreApeVisual = false;
this.documentoVisual  = true;
this.fechaNacivisuai  = false;
this.correoContraseVisua  = false ;


  }

}
