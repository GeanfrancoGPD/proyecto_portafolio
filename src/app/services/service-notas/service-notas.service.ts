import { Injectable } from '@angular/core';
import { ref, push, set } from 'firebase/database';
import { getDatabase } from '@angular/fire/database';
import { NotaPro } from '../../models/notas/notas.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceNotasService {
  private db = getDatabase();  

  crearNota(uid: string, nota: NotaPro) {
    const notaRef = ref(this.db, `usuarios/${uid}/notasPro`);
    const nuevaNotaRef = push(notaRef);
    return set(nuevaNotaRef, nota);
  }
}
