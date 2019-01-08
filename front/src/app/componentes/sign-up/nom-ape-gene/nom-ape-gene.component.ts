import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-nom-ape-gene',
  templateUrl: './nom-ape-gene.component.html',
  styleUrls: ['./nom-ape-gene.component.css']
})


export class NomApeGeneComponent implements OnInit {

@Output() Btn_nombreApeVisual = new EventEmitter();
// Con esta clase se puede enviar un evento a un clase padre

apellidoNombre: FormGroup;

nombreUsuario: string;
apellidoUsuario: String;
ciudadUsuario: String;


  constructor(formBuilder: FormBuilder) {
    this.apellidoNombre = formBuilder.group({
      'nombre': [null, Validators.required],
      'apellido': [null, Validators.required],
      'ciudadResiden': [null, Validators.required]

    });


   }

  ngOnInit() {
  }

clickBtnSiguiente(): void {
const Btn_Acti_nombreApeVisual = true;

const infoComp: object = {
nombreUs: this.nombreUsuario,
apellidoUs: this.apellidoUsuario,
ciudadUs: this.ciudadUsuario,
Btn_Acti_nombreApeVisual: true
};



this.Btn_nombreApeVisual.emit(infoComp);
// es un método del evento que se esta creando

console.log(this.nombreUsuario);
console.log(this.apellidoUsuario);
console.log(this.ciudadUsuario);


}



}
