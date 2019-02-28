import { Libro } from '../modelos/libro';


export const _libros: Libro[] = [{
  id: 1,
  sinopsis: 'ABC',
  descripcion: 'Lorem ',
  autor_id: 1,
  categoria_id: 1,
  titulo: 'titulo 1',
  numero_paginas: 12,
  gratuito: true,
  tipo: 'p',
  fecha_publicacion: new Date('2018-01-02T12:12:12')
}, {
  id: 2,
  sinopsis: 'CDF',
  descripcion: 'Lorem ',
  autor_id: 1,
  categoria_id: 1,
  titulo: 'titulo 2',
  numero_paginas: 12,
  gratuito: false,
  tipo: 'c',
    fecha_publicacion: new Date('2017-01-01T12:12:12')

}, {
  id: 3,
  sinopsis: 'FGH',
  descripcion: 'Lorem ',
  autor_id: 1,
  categoria_id: 1,
  titulo: 'titulo 3',
  numero_paginas: 12, 
  gratuito: true, 
  tipo: 'm',
    fecha_publicacion: new Date('2016-01-02T12:12:12')

}]
