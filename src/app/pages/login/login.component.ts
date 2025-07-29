import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/service-auth/service-auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  gmail = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.gmail, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        this.error = error.message;
      });
  } 



}
