import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl; // pega o url de heroku no environment

  constructor(private http: HttpClient) { }
  findAll():Observable<Categoria[]>{ // cria o metodo buscar todos e passa a lista de categoria
  const url = `${this.baseUrl}/categorias` // pega o url vindo da pasta environment: https://my-new-bookstore-api.herokuapp.com/categorias
  return this.http.get<Categoria[]>(url) // apenas retorna o url da lista de categoria
}
}
