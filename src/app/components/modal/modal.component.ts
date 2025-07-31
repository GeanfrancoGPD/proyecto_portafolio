import { Component, ViewChild, ElementRef} from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceNotasService } from '../../services/service-notas/service-notas.service';
import { NotaPro } from '../../models/notas/notas.model';


@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() show = false;
  @Input() tipo: 'crear' | 'editar' | 'eliminar' = 'crear';
  @Input() uidUsuario!: string;
  @Output() close = new EventEmitter<void>();
  @ViewChild('botonCrear') botonCrear!: ElementRef<HTMLButtonElement>;
  
  imagenSeleccionada: File | null = null;

  nota: NotaPro = {
    titulo: '',
    descripcion: '',
    fechaCreacion: '',
    imagenUrl: '',
    links:[],
  };
  
  linksTemp = {
    github: '',
    linkedin: '',
    otro: ''
  };


  constructor(private notasService: ServiceNotasService){}

  cerrarModal() {
    this.close.emit();
  }


  crearNota() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    this.nota.fechaCreacion = `${dia}/${mes}/${año}`;

    console.log("Uid de usuario:", this.uidUsuario);
    console.log("Datos de nota:", this.nota);
    this.nota.links = [];

    if (this.linksTemp.github.trim()) {
      this.nota.links.push({ tipo: 'GitHub', url: this.linksTemp.github });
      console.log(this.nota.links);
       
      }
      if (this.linksTemp.linkedin.trim()) {
        this.nota.links.push({ tipo: 'LinkedIn', url: this.linksTemp.linkedin });
      }
      if (this.linksTemp.otro.trim()) {
        this.nota.links.push({ tipo: 'Otro', url: this.linksTemp.otro });
      }

      this.notasService.crearNota(this.uidUsuario, this.nota)
        .then(() => console.log('Nota creada correctamente'))
        .catch(err => console.error('Error al crear la nota:', err));
    }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagenSeleccionada = input.files[0];
      console.log('Imagen seleccionada:', this.imagenSeleccionada.name);
    }
  }

}
