import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { NavigationExtras, Router } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  private pokemonList: PokemonList;

  /* Pagination */
  private elemsPerPage = 20;
  private actualPage: number;
  private totalPages: number;

  constructor(private pokedexService: PokedexService, private router:Router, private events: Events) { }

  ngOnInit() {
    this.actualPage = 1;
    this.getPokemonList(0);
  }

  private getPokemonList(pOffset:number){
    console.log("getPokemonList - INI" + pOffset);
    this.events.publish('showLoader');

    this.pokedexService.getPokemonList(pOffset).subscribe(
      (response) => {
        console.log("pokedexService.getPokemonList() - response: " + JSON.stringify(response));
        this.pokemonList = response;
        this.totalPages = this.pokemonList.count / this.elemsPerPage;
        this.events.publish('hideLoader');
      }, (err) => {
        console.log("pokedexService.getPokemonList() - err: " + JSON.stringify(err));
      }
    )
  }

  private navigate(pWhereTo){
    if(pWhereTo=='next'){
      this.actualPage = this.actualPage + 1;
    }else{
      this.actualPage = this.actualPage - 1;
    }

    let offset = this.elemsPerPage * (this.actualPage-1)
    this.getPokemonList(offset);
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
