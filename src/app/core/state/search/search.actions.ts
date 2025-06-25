import { PokemonFilter } from '@/features/pokedex/domain/entities/pokemon.model';
import { createAction, props } from '@ngrx/store';

export const applyPokedexFilters = createAction(
  '[Pokedex Page] Apply Pokedex Filters',
  props<{ filters: PokemonFilter }>()
);

export const resetPokedexFilters = createAction(
  '[Pokedex Page] Reset Pokedex Filters'
);
