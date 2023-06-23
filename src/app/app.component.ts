import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { FilmesService } from './services/filmes.service';
import { OptionsEmit } from './componentes/mult-type-list/interfaces/option.Emit.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public service : FilmesService){}
  opcesSelect! : OptionsEmit;
  opcesSelectSecond = new BehaviorSubject<Array<any>>([]);
  panelOpenState = false;
  tabelaBehavior =  new BehaviorSubject<any>(null);
  tabela$ = this.tabelaBehavior.asObservable();

  dados:any;
  colunas = [
    { nome:'Nome',campo:'nome'},
    { nome:'Genero',campo:'genero'},
    { nome:'Autor',campo:'autor'},
    { nome:'Lançamento',campo:'ano_lancamento'},
  ]
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
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

  receberOpcoesSelecionadas2(opcoesSelecionadas: any) {
    this.opcesSelect = opcoesSelecionadas;
    console.log('Opções selecionadas:', this.opcesSelect);
  }
  statusCombo(fechado:boolean){

    console.log(this.opcesSelect)


    console.log("status", fechado)
  }
  receberOpcoesSelecionadas22(opcoesSelecionadas: any) {
    this.opcesSelect = opcoesSelecionadas;
    console.log('Opções selecionadas:', this.opcesSelect);
  }
  statusCombo2(fechado:boolean){

    console.log(this.opcesSelect)
    console.log("status", fechado)
  }



}
