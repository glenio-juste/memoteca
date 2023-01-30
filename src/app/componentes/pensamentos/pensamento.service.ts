import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string):Observable<Pensamento[]> {
    const itensPorPagina = 6;

    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina)

    if(filtro.trim().length > 2){
      params = params.set("q", filtro)
    }

    //return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`);
    return this.http.get<Pensamento[]>(this.API, { params })
  }

  criar(pensamento_a_cadastrar: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento_a_cadastrar)
  }

  editar(pensamento_a_editar: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento_a_editar.id}`
    return this.http.put<Pensamento>(url, pensamento_a_editar)
  }

  mudarFavorito(pensamento: Pensamento):Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }


  excluir(id: number):Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscaPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
