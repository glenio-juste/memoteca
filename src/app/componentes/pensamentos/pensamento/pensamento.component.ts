import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento_componente = {
    conteudo: 'I love Angular',
    autoria: 'Glenn',
    modelo: 'modelo3'
  }

  constructor(){ }

  ngOnInit(): void {

  }


}
