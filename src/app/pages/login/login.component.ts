import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';




@Component({
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;

constructor(
  private fb: FormBuilder,
private authService: AuthService,
private router: Router,
private snackBar: MatSnackBar
){
  this.loginForm= this.fb.group({
    username:['', [Validators.required, Validators.minLength(3)]],
    password:['', [Validators.required, Validators.min(4)]]
  });
}

login() {
  if(this.loginForm.invalid) {
    this.snackBar.open('Por favor complete todos los campos correctamente', 'cerrar', {duration: 3000 , panelClass: ['error-snackbar']});
    return;
  }

  const { username, password} = this.loginForm.value;
  if(this.authService.login(username, password)) {
    this.router.navigate(['/home']);
  }else{
    this.snackBar.open('usuario o contraseña incorrectas', 'cerrar', {duration: 3000, panelClass:['Error-snackbar']})
  }
}

get usernameError(){
  const control = this.loginForm.get('username');
  return control?.hasError('required') ? 'El usuario  es obligatorio':
          control?.hasError('minlength') ? 'Mínimo 3 caracteres': '';
}
get passwordError(){
  const control = this.loginForm.get('password');
  return control?.hasError('required') ? 'La contraseña  es obligatoria':
          control?.hasError('minlength') ? 'Mínimo 6 caracteres': '';
}
}
