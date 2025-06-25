import { PokemonFilter } from '@/features/pokedex/domain/entities/pokemon.model';

export interface PokedexState {
  filters: PokemonFilter;
}

export const initialPokedexState: PokedexState = {
  filters: {},
};
