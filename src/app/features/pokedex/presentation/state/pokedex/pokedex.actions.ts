import { Pokemon } from '@/features/pokedex/domain/entities/pokemon.model';
import { createAction, props } from '@ngrx/store';

export const applyPokedexFilters = createAction(
  '[Pokedex Page] Apply Pokedex Filters',
  props<{ filters: Partial<Pokemon> }>()
);

export const resetPokedexFilters = createAction(
  '[Pokedex Page] Reset Pokedex Filters'
);
