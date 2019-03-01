import { Component, OnInit } from '@angular/core';
import { Autor } from '../../modelos/autor';
import { autores } from '../../datos/autores';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AutoresService } from '../../servicios/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss'],
  providers: [AutoresService]
})
export class AutoresComponent implements OnInit {

  public autores: Autor[] = autores;

  public formAutor: FormGroup;
  public msg: string;

  public data: Observable < number[] > ;





  constructor(public as: AutoresService) {

  }

  ngOnInit() {

    console.log("inicio");
    this.data = new Observable(observer => {
      let lista: number[] = [];
      //lista.push(41);


      setTimeout(() => {
        lista.push(42);
        observer.next(lista);
      }, 1000);

      setTimeout(() => {
        lista.push(43)
        observer.next(lista);
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    /* let subscription = this.data.subscribe(
         value => console.log(value),
         error => console.log(error),
         () => console.log("termino")
     );*/

    console.log("termino");


  }


  nuevoAutor() {


    this.formAutor = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl()
    });

    //let autor: Autor = this.formAutor.value;



    this.msg = null;

  }

  public agregarAutor() {

    if (this.formAutor.value.id) {

      for (let i = 0; i < this.autores.length; i++) {
        if (this.autores[i].id == this.formAutor.value.id) {
          this.autores[i] = this.formAutor.value;
          this.msg = "Se ha actualizado el autor";
        }

      }



    } else {

      let autor: Autor = this.formAutor.value;

      this.as.crear(autor).subscribe((respuesta: any) => {

        console.log("next");


        let _id: string = respuesta.name;
        autor.id = _id;
        this.autores.push(autor);

        this.msg = "Se ha guardado el autor";

      });



    }

    this.formAutor = null;



  }

  public ocultarForm() {
    this.formAutor = null;
  }

  public editarAutor(indice: number, autor: Autor) {
    this.nuevoAutor();
    /*this.formAutor.patchValue({
      id: autor.id,
      nombre: autor.nombre,
      apellido: autor.apellido
    });*/

    //this.formAutor.patchValue(autor);
    this.formAutor.setValue(autor);



  }

  public borrarAutor(indice: number, autor: Autor) {
    this.autores.splice(indice, 1);
    this.msg = "Se ha borrado el autor";


  }

}
