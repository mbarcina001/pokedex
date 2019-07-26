import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokemonList } from 'src/app/models/pokemon-list.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  private pokemonList: PokemonList;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getPokemonList().subscribe(
      (response) => {
        console.log("pokedexService.getPokemonList() - response: " + JSON.stringify(response));
        this.pokemonList = response;
      }, (err) => {
        console.log("pokedexService.getPokemonList() - err: " + JSON.stringify(err));
      }
    )
  }

}
