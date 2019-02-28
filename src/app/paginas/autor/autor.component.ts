import { Component, OnInit } from '@angular/core';
import { autores} from '../../datos/autores';
import { Autor } from '../../modelos/autor';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

	public _autores: Autor[]= autores;

	public _autor: Autor;
	public _id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this._id = this.route.snapshot.paramMap.get('id');

  	this._autor= this._autores.find(autor=> this._id == autor.id);



  }

}
