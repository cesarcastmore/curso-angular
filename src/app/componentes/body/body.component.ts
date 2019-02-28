import { Component, OnInit, TemplateRef, ViewEncapsulation, Input } from '@angular/core';
import { Libro } from '../../modelos/libro';
import { _libros } from '../../datos/libros';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
 //, encapsulation: ViewEncapsulation.Sh
})
export class BodyComponent implements OnInit {

 @Input() libro:Libro;

  public libros: Libro[] = _libros;
  public indice: number = 0;

  public faMoneyBillAlt: any = faMoneyBillAlt;

  public estilo: any = {
    'background-color': 'red'
  }


  modalRef: BsModalRef;


  constructor(private modalService: BsModalService) {}

  ngOnInit() {

  }

  siguiente(): void {
    if (this.libros.length -1 > this.indice) {
      this.indice = this.indice + 1;

    } else if (this.libros.length -1 == this.indice) {
      this.indice=0;

    }

    switch (this.indice) {
      case 1:
        this.estilo['background-color']= 'yellow';
        break;
      case 2:
        this.estilo['background-color']= 'blue';
        break;
      case 3:
        this.estilo['background-color']= 'green';
        break;
    }


  }

  indiceMasUno(): number{
  	return this.indice+1;
  }


openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  evaluarBorder(): string {
    switch (this.indice) {
      case 0:
        return 'border-orange';
      case 1:
        return 'border-blue';
      case 2:
        return 'border-red';
    }
  }
}
