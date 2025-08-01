import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceNotasService } from '../../services/service-notas/service-notas.service';
import { NotaPro } from '../../models/notas/notas.model';
import { LinkIconComponent } from '../link-icon/link-icon.component';

@Component({
  selector: 'app-notes',
  imports: [CommonModule, LinkIconComponent],
  standalone: true,
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  @Input() uid!: string;

  notas: NotaPro[] = [];

  constructor(private notasService: ServiceNotasService) {}

  ngOnInit() {
    if (this.uid) {
      this.cargarNotas();
    }
  }

  async cargarNotas() {
    try {
      this.notas = await this.notasService.obtenerNotas(this.uid);
      console.log("Notas cargadas:", this.notas);
    } catch (err) {
      console.error("Error al obtener notas:", err);
    }
  }
}
