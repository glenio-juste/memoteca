import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento_componente: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = []

  constructor(private service: PensamentoService){ }

  ngOnInit(): void {

  }


  larguraPensamento(): string {
    if(this.pensamento_componente.conteudo.length > 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }


  mudarIconeFavorito(): string {
    if(this.pensamento_componente.favorito == false){
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento_componente).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento_componente), 1)
    });
  }


}
