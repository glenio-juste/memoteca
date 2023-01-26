import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentoAqui: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaDosPensamentos) =>{
      this.listaPensamentos = listaDosPensamentos;
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro)
    .subscribe(listaPensamentosAqui =>{
        this.listaPensamentos.push(...listaPensamentosAqui);
        if(!listaPensamentosAqui.length){
          this.haMaisPensamentoAqui = false;
        }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentoAqui = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
        .subscribe(listaPensamentoPesquisa => {
          this.listaPensamentos = listaPensamentoPesquisa
        })

  }

}
