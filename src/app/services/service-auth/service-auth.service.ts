import { Injectable, inject } from '@angular/core';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { Auth } from '@angular/fire/auth'; 

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth = inject(Auth); 
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }
}
