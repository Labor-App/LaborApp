import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fecha-nacimiento',
  templateUrl: './fecha-nacimiento.component.html',
  styleUrls: ['./fecha-nacimiento.component.css']
})
export class FechaNacimientoComponent implements OnInit {
  hoy = new Date()
  minDate = new Date(this.hoy.getFullYear() - 300, this.hoy.getMonth());
  maxDate = new Date(this.hoy.getFullYear() - 18, this.hoy.getMonth(), this.hoy.getDate());

  @Output() Btn_fechaNacimiento = new EventEmitter();
  fechaNacimiento: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.fechaNacimiento = formBuilder.group({
      'nacimiento': [null, Validators.required]

    });

  }

  ngOnInit() {
  }

  fechaNaci_clickBtnSiguiente():  void {

    const ObjfechaNaci: object = {
      fechaNacimiento : this.fechaNacimiento.value.nacimiento,
      Btn_Acti_fechaNaci : true

    };

    this.Btn_fechaNacimiento.emit(ObjfechaNaci);

  }



}
