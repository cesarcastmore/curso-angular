import { Injectable } from '@angular/core';
import { categorias } from '../datos/categorias';
import { Categoria } from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public _categorias: Categoria[] = categorias;

  constructor() {


  }

  public agregar() {
    this._categorias.push({
      id: String(this._categorias.length + 1),
      nombre: 'Fabulas'
    });
  }

  public borrar() {
    this._categorias.pop();
  }


}
