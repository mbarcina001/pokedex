import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  private pokemonName: string;
  private pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private router: Router, private pokedexService: PokedexService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pokemonName = this.router.getCurrentNavigation().extras.state.pokemonName;
        this.getPokemonData();
      }
    });
  }

  ngOnInit() {
    
  }

  private getPokemonData(){
    this.pokedexService.getPokemon(this.pokemonName).subscribe(
      (response) => {
        console.log("pokedexService.getPokemonList() - response: " + JSON.stringify(response));
        this.pokemon = response;
        console.log(this.pokemon.abilities)
        console.log(this.pokemon.moves)
        console.log(this.pokemon.types)
      }, (err) => {
        console.log("pokedexService.getPokemonList() - err: " + JSON.stringify(err));
      }
    )
  }

}
