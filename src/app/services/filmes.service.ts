import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http:HttpClient) { }

  url= 'http://localhost:3000/filmes';
  buscaFilmes(){
    return this.http.get<any>(this.url);
  }
}
