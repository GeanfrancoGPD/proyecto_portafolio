export interface NotaPro {
  titulo: string;
  descripcion: string;
  imagenUrl?: string;
  links?: { tipo: string; url: string }[];
  fechaCreacion: string;
}
