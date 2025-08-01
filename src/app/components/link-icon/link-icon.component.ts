import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './link-icon.component.html',
  styleUrl: './link-icon.component.css'
})
export class LinkIconComponent {
  @Input() tipo!:string;
  @Input() url!: string;


}
