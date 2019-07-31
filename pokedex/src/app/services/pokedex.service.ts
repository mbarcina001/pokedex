import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list.model';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { PokemonDescription } from '../models/pokemon-description.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private baseUrl = "https://pokeapi.co/api/v2";

  constructor(private httpClient : HttpClient) { }

  public getPokemonList(pOffset: number) : Observable<PokemonList>{
    return this.httpClient.get<PokemonList>(this.baseUrl + '/pokemon?offset='+pOffset);
  }

  public getPokemon(pPokemonName:string) : Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(this.baseUrl + '/pokemon/'+pPokemonName);
  }

  public getPokemonDescription(pPokemonName:string) : Observable<PokemonDescription>{
    return this.httpClient.get<PokemonDescription>(this.baseUrl + '/pokemon-species/'+pPokemonName);
  }
}
