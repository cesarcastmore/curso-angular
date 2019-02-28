export interface Libro {
	id: number;
	descripcion?: string;
	titulo: string;
	numero_paginas: number;
	autor_id: number;
	categoria_id: number;
	sinopsis: string;
	gratuito: boolean;
	tipo: string;
	fecha_publicacion: Date;
}
