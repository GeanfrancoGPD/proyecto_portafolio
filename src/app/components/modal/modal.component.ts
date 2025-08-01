import { Component, ViewChild, ElementRef} from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceNotasService } from '../../services/service-notas/service-notas.service';
import { NotaPro } from '../../models/notas/notas.model';
import { StorageService } from '../../services/service-storage/storage.service';


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
    categoria: '',
    fechaCreacion: '',
    imagenUrl: '',
    links:[],
  };
  linksTemp = {
    github: '',
    linkedin: '',
    otro: ''
  };


  constructor(private notasService: ServiceNotasService, private storageService:StorageService){}

  cerrarModal() {
    this.close.emit();
  }


  async crearNota() {
    const fecha = new Date();
    this.nota.fechaCreacion = fecha.toISOString(); // Recomendación: formato ISO
    
    this.nota.links = [];

    if (this.linksTemp.github.trim()) {
      this.nota.links.push({ tipo: 'GitHub', url: this.linksTemp.github });
    }
    if (this.linksTemp.linkedin.trim()) {
      this.nota.links.push({ tipo: 'LinkedIn', url: this.linksTemp.linkedin });
    }
    if (this.linksTemp.otro.trim()) {
      this.nota.links.push({ tipo: 'Otro', url: this.linksTemp.otro });
    }

    try {
      if (this.imagenSeleccionada) {
        const base64 = await this.storageService.convertirABase64(this.imagenSeleccionada);
        this.nota.imagenUrl = base64;
      } else {
        alert('Debes seleccionar una imagen antes de guardar la nota.');
        return;
      }


      await this.notasService.crearNota(this.uidUsuario, this.nota);
      console.log('Nota creada correctamente');
    } catch (err) {
      console.error('Error al crear la nota o subir imagen:', err);
    }
  }



  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagenSeleccionada = input.files[0];
      console.log('Imagen seleccionada:', this.imagenSeleccionada.name);
    }
  }

}
