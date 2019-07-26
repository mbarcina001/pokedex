import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl = "https://pokeapi.co/api/v2";

  constructor(private httpClient : HttpClient) { }

  public getPokemonList() : Observable<PokemonList>{
    return this.httpClient.get<PokemonList>(this.baseUrl + '/pokemon');
  }
}
