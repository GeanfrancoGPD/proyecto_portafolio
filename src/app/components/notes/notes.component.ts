import { Component, Input, OnInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceNotasService } from '../../services/service-notas/service-notas.service';
import { NotaPro } from '../../models/notas/notas.model';
import { LinkIconComponent } from '../link-icon/link-icon.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, LinkIconComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  @Input() uid!: string;
  @Input() categoria?: string;
  @ViewChildren('sliderRef') sliders!: QueryList<ElementRef>;
  @ViewChild('generalSlider') generalSlider!: ElementRef;

  notas: NotaPro[] = [];
  notasPorCategoria: { [categoria: string]: NotaPro[] } = {};

  constructor(private notasService: ServiceNotasService) {}

  async ngOnInit() {
    if (!this.uid) return;

    try {
      const todasLasNotas = await this.notasService.obtenerNotas(this.uid);

      this.notas = todasLasNotas;

      // Agrupar por categoría
      this.notasPorCategoria = todasLasNotas.reduce((acc, nota) => {
        const cat = nota.categoria || 'Sin categoría';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(nota);
        return acc;
      }, {} as { [categoria: string]: NotaPro[] });

    } catch (error) {
      console.error('Error al cargar notas:', error);
    }
  }

  scrollSlider(categoria: string, direction: 'left' | 'right') {
    const slider = this.sliders.find(sl =>
      sl.nativeElement.getAttribute('data-categoria') === categoria
    );
    if (!slider) return;

    const container = slider.nativeElement;
    const scrollAmount = container.offsetWidth / 2;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

    scrollGeneral(direction: 'left' | 'right') {
    if (!this.generalSlider) return;

    const container = this.generalSlider.nativeElement;
    const scrollAmount = container.offsetWidth / 2;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }


}
