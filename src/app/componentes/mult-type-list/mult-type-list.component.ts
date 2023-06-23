import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { OptionsEmit } from './interfaces/option.Emit.interface';

@Component({
  selector: 'app-mult-type-list',
  templateUrl: './mult-type-list.component.html',
  styleUrls: ['./mult-type-list.component.css']
})
export class MultTypeListComponent implements OnInit {

  constructor() { }

  options! : OptionsEmit;
  ngOnInit(): void {

  }

  @ViewChild('select') select!: MatSelect;
  @Input() opcoes: any[] = [];
  @Input() multiSelect: boolean = false;
  @Output() opcoesSelecionadas = new EventEmitter<any>();
  @Output() comboFechado = new EventEmitter<boolean>();

  opcoesSelecionadasList: [] = [];

  emitirOpcoesSelecionadas(opcao:MatOptionSelectionChange) {


  }
  fechado() {

    if(this.multiSelect){
      let ids = this.opcoesSelecionadasList.map((x:any) => x.id)
      this.opcoesSelecionadas?.emit(ids);
    }else{
      this.opcoesSelecionadas?.emit(this.opcoesSelecionadasList);

    }

    this.comboFechado?.emit(true);
  }

}

