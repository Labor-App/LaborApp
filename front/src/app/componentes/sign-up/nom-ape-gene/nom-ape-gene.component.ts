import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-nom-ape-gene',
  templateUrl: './nom-ape-gene.component.html',
  styleUrls: ['./nom-ape-gene.component.css']
})


export class NomApeGeneComponent implements OnInit {

@Output() Btn_nombreApeVisual = new EventEmitter(); //Se creo un evento 

apellidoNombre: FormGroup;


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



this.Btn_nombreApeVisual.emit(Btn_Acti_nombreApeVisual);


}

}
