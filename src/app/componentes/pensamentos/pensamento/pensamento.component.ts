import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento_componente: Pensamento = {
    id: 1,
    conteudo: 'I love Angular',
    autoria: 'Glenn',
    modelo: 'modelo3'
  }

  constructor(){ }

  ngOnInit(): void {

  }


  larguraPensamento(): string {
    if(this.pensamento_componente.conteudo.length > 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }


}
