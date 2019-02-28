import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Libro } from '../../modelos/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input('book') libro: Libro;

  @Input() categoria: string;

  @Output() cambioCategoria: EventEmitter < string > = new EventEmitter < string > ();


  public fue_selecionado: boolean = false;



  constructor() {
    console.log(this.categoria)
  }

  ngOnInit() {
    console.log(this.categoria)

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }


  public selecionar(event) {
    this.fue_selecionado = event;
    this.cambioCategoria.emit("Cuentos");

  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'categoria') {
        let chng = changes[propName];
        let cur = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        console.log("cur", cur);
        console.log("prev", prev);
      }
    }
  }

}
