import { Component, OnInit } from '@angular/core';
import { Libro } from '../../modelos/libro';
import { _libros } from '../../datos/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

	public libros: Libro[]= _libros;

  public categoria: string= 'poemas';


  constructor() { 
  }

  ngOnInit() {
  	console.log("ngOnInit")

  }

  public destruirTarjetas(){
  	this.libros=[];
  }

}
