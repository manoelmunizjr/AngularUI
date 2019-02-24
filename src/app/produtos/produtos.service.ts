import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';

import { Produtos } from './../core/model';

export class ProdutosFiltro {
  codigo: number;
  nome: string;
  valor: number;
  pagina = 0;
  itensPorPagina = 8;
}

@Injectable()
export class ProdutosService {

  produtosUrl = 'http://localhost:8080/produtos';

  constructor(private http: AuthHttp) { }

  pesquisar(filtro: ProdutosFiltro): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.produtosUrl}`,
        { search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const produtos = responseJson.content;

        const resultado = {
          produtos,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Produtos> {
    return this.http.get(`${this.produtosUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const produtos = response.json() as Produtos;
        return produtos;
      });
  }

}
