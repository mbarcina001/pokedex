import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  private pokemonList: [];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getPokemonList().subscribe(
      (response) => {
        console.log("pokedexService.getPokemonList() - response: " + JSON.stringify(response));
        this.pokemonList = response.results;
      }, (err) => {
        console.log("pokedexService.getPokemonList() - err: " + JSON.stringify(err));
      }
    )
  }

}
