import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  private pokemonList: PokemonList;

  constructor(private pokedexService: PokedexService, private router:Router) { }

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


  public openPokemonDetail(pPokemonName: string){
    let navigationExtras: NavigationExtras = {
      state: {
        pokemonName: pPokemonName
      }
    };
    this.router.navigate(['pokemon'], navigationExtras);
  }

}
