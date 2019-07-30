import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss'],
})
export class PokemonTypeComponent {
  @Input() type: string

  constructor() { }

}
