import { Component } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  gmail = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  register(){
      createUserWithEmailAndPassword(this.auth, this.gmail, this.password)
      .then(() => {
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.error = err.message;
    });
  }
}
