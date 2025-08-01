import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorTextComponent } from '../../components/editor-text/editor-text.component';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../../components/notes/notes.component';
import { AuthService } from '../../services/service-auth/service-auth.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
import { LinkIconComponent } from '../../components/link-icon/link-icon.component';

@Component({
  selector: 'app-home',
  imports: [ FormsModule, CommonModule, EditorTextComponent, 
    NotesComponent, ModalComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('botonGuardar') botonG!: ElementRef<HTMLButtonElement>;
  constructor(private authService: AuthService, private router: Router) {}
  mostrarModal = false;
  tipoModal: 'crear' | 'editar' | 'eliminar' = 'crear';
  uid: string = 'dy2xi4booiRkL4oyFQQOY5fB72s1';


  // ngOnInit() {
  //   const user = this.authService.getCurrentUser();
  //   if( user === null){
  //     this.router.navigate(['/']);
  //   }else{
  //    this.uid = user.uid   
  //   }
  //   console.log('Usuario actual:', user?.email);
  //   console.log('Datos del usuario', user?.uid);
  // }


  abrirModal(tipo: 'crear' | 'editar' | 'eliminar') {
    this.tipoModal = tipo;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
  


  

  


}
