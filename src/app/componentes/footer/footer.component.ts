import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

@Input() paginas: number;





public fue_seleccionado: boolean= false;

@Output() onSeleccionar: EventEmitter<boolean>= new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit() {
  }


  public seleccionar(){
  	this.fue_seleccionado= !this.fue_seleccionado;
  	this.onSeleccionar.emit(this.fue_seleccionado);

  }

}
