import { createReducer, on } from '@ngrx/store';
import { initialPokedexState } from './search.state';
import * as PokedexActions from './search.actions';

export const pokedexFeatureKey = 'pokedex';

export const pokedexReducer = createReducer(
  initialPokedexState,

  on(PokedexActions.applyPokedexFilters, (state, { filters }) => ({
    ...state,
    filters,
  })),

  on(PokedexActions.resetPokedexFilters, (state) => ({
    ...state,
    filters: {},
  }))
);
