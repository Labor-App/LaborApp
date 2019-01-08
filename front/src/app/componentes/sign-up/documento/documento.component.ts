import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
// Se importan los modulos para hacer la validación en los formularios. 


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  @Output() Btn_documentoIden = new EventEmitter();
  documento: FormGroup;
  generoUs: string;
  cedulaUs: number;
  lugarCedulaUs: string;

  constructor(formBuilder: FormBuilder) {
    // Se instancia la clase FormBuilder en el constructor
    this.documento = formBuilder.group({
      'genero': [null, Validators.required],
      'cedula': [null, Validators.required],
      'lugarCedula': [null, Validators.required]
      // Se ingresan los campos del formulario que se quieren validar

    });
  }

  ngOnInit() {
  }

  Doc_clickBtnSiguiente(): void {

    const infoCompDocumento: Object = {
      Btn_Acti_documento: true,
      generoUsuario: this.generoUs,
      cedulaUsuario: this.cedulaUs,
      lugarUsuario: this.lugarCedulaUs
    };


    this.Btn_documentoIden.emit(infoCompDocumento);
    // se envía el evento con datos cuando el evento ocurre.

    }

}
