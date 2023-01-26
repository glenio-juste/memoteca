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

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaDosPensamentos) =>{
      this.listaPensamentos = listaDosPensamentos;
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual)
    .subscribe(listaPensamentosAqui =>{
        this.listaPensamentos.push(...listaPensamentosAqui);
        if(!listaPensamentosAqui.length){
          this.haMaisPensamentoAqui = false;
        }
    })
  }

}
