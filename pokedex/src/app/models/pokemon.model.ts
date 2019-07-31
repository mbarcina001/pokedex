import { PokemonSprite } from './pokemon-sprite.model';
import { PokemonType } from './pokemon-type.model';

export class Pokemon{
    public base_experience: number;
    public height: number;
    public id: number;
    public sprites: PokemonSprite[];
    public types: PokemonType[];
    public weight: number;
}