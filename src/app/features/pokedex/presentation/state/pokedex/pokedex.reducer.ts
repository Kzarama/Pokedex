import { createReducer, on } from '@ngrx/store';
import { initialPokedexState } from './pokedex.state';
import * as PokedexActions from './pokedex.actions';

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
