import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokedexState } from './pokedex.state';
import { pokedexFeatureKey } from './pokedex.reducer';

export const selectPokedexState =
  createFeatureSelector<PokedexState>(pokedexFeatureKey);

export const selectCurrentPokedexFilters = createSelector(
  selectPokedexState,
  (state: PokedexState) => state.filters
);
