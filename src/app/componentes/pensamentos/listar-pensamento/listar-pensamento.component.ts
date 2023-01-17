import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  // lista vem de um back-end
  listaPensamentos = [
    /* {
      conteudo: 'Passo informação para o componente filho',
      autoria: 'Componete pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com o @Input()',
      autoria: 'Componete filho',
      modelo: 'modelo3'
    } */
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
