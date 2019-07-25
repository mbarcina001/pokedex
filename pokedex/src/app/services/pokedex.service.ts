import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl = "https://pokeapi.co/api/v2";

  constructor(private httpClient : HttpClient) { }

  public getPokemonList() : any{
    return this.httpClient.get(this.baseUrl + '/pokemon');
  }
}
