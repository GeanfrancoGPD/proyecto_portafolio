import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-text',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './editor-text.component.html',
  styleUrl: './editor-text.component.css'
})
export class EditorTextComponent {
  @Input() title: string = 'Mi título';
  editing: boolean = false;

  startEditing() {
    this.editing = true;
  }

  stopEditing() {
    this.editing = false;
  }
}
