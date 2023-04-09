import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  pageIndex = 1;
  pageSize = 5;
  totalItens: number = 0;
  exibindoItens: number = 0;

  @Input() colunas!: {nome: string, campo: string}[];
  @Input() dados!: any;

  @Input() exibirAcoes?: boolean =true;
  @Output() editar = new EventEmitter<any>();
  @Output() excluir = new EventEmitter<any>();
  data:any = [];

  constructor() { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.data = [... this.dados]
    this.items()



  }

  items(): any[] {
    const start = (this.pageIndex - 1) * this.pageSize;
    const end = start + this.pageSize;
    const dadosReturn = this.data.slice(start, end);
    this.totalItens = this.dados.length;
    this.exibindoItens = dadosReturn.length;
    this.data = dadosReturn;
    return dadosReturn;
  }

  ngAfterViewInit() {
    this.dados.paginator = this.paginator;
    this.dados.paginator.pageIndex = this.pageIndex;
    this.dados.paginator.pageSize = this.pageSize;

  }
  isEven(row: any): boolean {
    return this.dados.indexOf(row) % 2 === 0;
  }
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    const itemsToShow = this.dados.slice(startIndex, endIndex);
    this.exibindoItens = itemsToShow.length;
    this.data = itemsToShow;
    // Atualize a lista de itens exibidos com `itemsToShow`
  }

  _editar(elemento: any) {
    this.editar.emit(elemento);
  }

  _excluir(elemento: any) {
    this.excluir.emit(elemento);
  }

  obterNomesDasColunas(colunas: any[]): string[] {
    let retorno = colunas.map(c => c.campo);
    if(this.exibirAcoes) retorno.push('acoes')
    return retorno;
  }

}

