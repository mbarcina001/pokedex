import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { PokedexService } from 'src/app/services/pokedex.service';

import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDescription } from 'src/app/models/pokemon-description.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage {

  public pokemonName: string;
  public pokemon: Pokemon;
  private pokemonDescription: PokemonDescription;
  public pokemonDescriptionText: string;

  constructor(private route: ActivatedRoute, private router: Router, private pokedexService: PokedexService, private events: Events, private storage: Storage) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pokemonName = this.router.getCurrentNavigation().extras.state.pokemonName;
        this.getPokemonData();
      }
    });
  }

  private getPokemonData(){
    this.events.publish('showLoader');
    Promise.all([
      this.pokedexService.getPokemon(this.pokemonName).subscribe(
        (response) => {
          this.pokemon = response;
        },(err) => {
          console.log("pokedexService.getPokemonData() - err: " + JSON.stringify(err));
          this.events.publish('showErrorModal');
        }
      ),
      this.pokedexService.getPokemonDescription(this.pokemonName).subscribe(
        (response) => {
          this.pokemonDescription = response;
          this.getDescriptionByLanguage();
        },(err) => {
          console.log("pokedexService.getPokemonDescription() - err: " + JSON.stringify(err));
          this.events.publish('showErrorModal');
        }
      )
    ]).then(() => {
      this.events.publish('hideLoader');
    });
  }

  getDescriptionByLanguage() : void{
    this.storage.get('language').then((val: string) => {
      console.log(val);
      for (var i=0; i < this.pokemonDescription.flavor_text_entries.length; i++){
        console.log(this.pokemonDescription.flavor_text_entries[i]['language'].name);
        if (this.pokemonDescription.flavor_text_entries[i]['language'].name === val){
          this.pokemonDescriptionText = this.pokemonDescription.flavor_text_entries[i].flavor_text;
          break;
        }
      }
    });
  }
}
