import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorTextComponent } from '../../components/editor-text/editor-text.component';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../../components/notes/notes.component';
import { AuthService } from '../../services/service-auth/service-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ FormsModule, CommonModule, EditorTextComponent, NotesComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('botonGuardar') botonG!: ElementRef<HTMLButtonElement>;
  constructor(private authService: AuthService, private router: Router) {}

  // ngOnInit() {
  //   const user = this.authService.getCurrentUser();
  //   if( user === null){
  //     this.router.navigate(['/']);
  //   }
  //   console.log('Usuario actual:', user?.email);
  //   console.log('Datos del usuario', user?.uid);
  // }

  
  guardar() {
    console.log('Botón clickeado');
  }


}
