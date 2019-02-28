import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../servicios/categoria.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  constructor(public cs: CategoriaService) { }

  ngOnInit() {
  }

}
