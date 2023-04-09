import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { FilmesService } from './services/filmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public service : FilmesService){}
  tabelaBehavior =  new BehaviorSubject<any>(null);
  tabela$ = this.tabelaBehavior.asObservable();
  dados:any;
  colunas = [
    { nome:'Nome',campo:'nome'},
    { nome:'Genero',campo:'genero'},
    { nome:'Autor',campo:'autor'},
    { nome:'Lançamento',campo:'ano_lancamento'},
  ]
  ngOnInit(): void {
   this.busca()
  }

  editar(event:any){

  }
  excluir(event:any){

  }

  busca(){
   this.tabela$ =  this.service.buscaFilmes().pipe(
    tap(x =>{
      this.dados = x
      console.log(x)
      this.tabelaBehavior.next(x)
    } )
   );
  }

}
