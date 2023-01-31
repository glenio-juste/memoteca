import { Router } from '@angular/router';
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
  favoritos: boolean = false
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaDosPensamentos) =>{
      this.listaPensamentos = listaDosPensamentos;
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
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
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
        .subscribe(listaPensamentoPesquisa => {
          this.listaPensamentos = listaPensamentoPesquisa
        })

  }

  carregarComponente(){

    this.favoritos = false;
    this.paginaAtual = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])

  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.favoritos = true
    this.haMaisPensamentoAqui = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentosFavoritos => {
        this.listaPensamentos = listaPensamentosFavoritos
        this.listaFavoritos = listaPensamentosFavoritos
      })
  }

}
