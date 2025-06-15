import { Pokemon } from '@/features/pokedex/domain/entities/pokemon.model';

export interface PokedexState {
  filters: Partial<Pokemon>;
}

export const initialPokedexState: PokedexState = {
  filters: {},
};
