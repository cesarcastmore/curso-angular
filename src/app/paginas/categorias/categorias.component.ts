import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../servicios/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  providers: [CategoriaService]
})
export class CategoriasComponent implements OnInit {

  constructor(public cs: CategoriaService) { }

  ngOnInit() {
  }

}
