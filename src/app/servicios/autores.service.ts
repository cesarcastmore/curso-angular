import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../modelos/autor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  public url: string = "https://angular-1f48b.firebaseio.com/autores";

  constructor(private http: HttpClient) {


  }


  public crear(autor: Autor): Observable < any > {
    return this.http.post(this.url + ".json", autor);
  }

  public obtenerAutores(): Observable < any > {
    return this.http.get(this.url + ".json");
  }

  public borrarAutor(id: string): Observable < any > {
    return this.http.delete(this.url + '/' + id + ".json");
  }

  public actualizarAutor(autor: Autor): Observable < any > {
    return this.http.put(this.url + '/' + autor.id + ".json", autor);

  }
}
