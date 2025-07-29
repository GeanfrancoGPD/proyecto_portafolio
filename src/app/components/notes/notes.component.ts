import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  notas = [
    { titulo: 'Nota 1', contenido: 'Contenido de la nota 1' },
    { titulo: 'Nota 2', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 3', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 4', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 5', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 6', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 7', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 8', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 9', contenido: 'Contenido de la nota 2' },
    { titulo: 'Nota 10', contenido: 'Contenido de la nota 2' },
  

  ];

}
