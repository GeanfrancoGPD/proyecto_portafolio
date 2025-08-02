import { Injectable } from '@angular/core';
import { ref, push, set, get, remove } from 'firebase/database';
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

  async obtenerNotas(uid: string): Promise<NotaPro[]> {
    const notaRef = ref(this.db, `usuarios/${uid}/notasPro`);
    const snapshot = await get(notaRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      return Object.values(data).map((nota: any) => {
        if (nota.links && typeof nota.links === 'object' && !Array.isArray(nota.links)) {
          nota.links = Object.values(nota.links);
        }
        return nota;
      }) as NotaPro[];
    } else {
      return [];
    } 
  }

  eliminarNota(uid: string, notaId: string) {
    const notaRef = ref(this.db, `usuarios/${uid}/notasPro/${notaId}`);
    return remove(notaRef);
  }


}
