import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  // lista vem de um back-end
  listaPensamentos = [
    {
      conteudo: 'Passo informação para o componente filho',
      autoria: 'Componete pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com o @Input()',
      autoria: 'Componete filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      autoria: '',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
