import { PokemonMove } from './pokemon-move.model';
import { PokemonSprite } from './pokemon-sprite.model';
import { PokemonType } from './pokemon-type.model';
import { PokemonAbilities } from './pokemon.abilities.model';

export class Pokemon{
    public abilities: PokemonAbilities[];
    public base_experience: number;
    public height: number;
    public id: number;
    public moves: PokemonMove[];
    public sprites: PokemonSprite[];
    public types: PokemonType[];
    public weight: number;
}