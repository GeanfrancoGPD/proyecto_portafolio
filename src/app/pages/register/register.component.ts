import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/service-auth/service-auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  gmail = '';
  password = ''; 
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.gmail, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Error al registrarse:', error);
        this.error = error.message;
      });
  }
}
