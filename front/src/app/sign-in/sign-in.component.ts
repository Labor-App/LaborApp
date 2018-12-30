import { Component, OnInit } from '@angular/core';

//Forms
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

//SnackBar
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  //MatSnackBar
  openSnackBar() {
    this.snackBar.open('Credenciales incorrectas', '', {
      duration: 2500,
    });
  }

  //Email
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

  emailFormControl = new FormControl('', [
   Validators.required,
   Validators.email,
  ]);

  matcher = new ErrorStateMatcher();

  //Password
  hide = true;



}
