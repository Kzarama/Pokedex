import { PokemonFilter } from '@/features/pokedex/domain/repositories/pokemon.repository';

export interface PokedexState {
  filters: PokemonFilter;
}

export const initialPokedexState: PokedexState = {
  filters: {},
};
