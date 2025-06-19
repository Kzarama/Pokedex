import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokedexState } from './search.state';
import { pokedexFeatureKey } from './search.reducer';

export const selectPokedexState =
  createFeatureSelector<PokedexState>(pokedexFeatureKey);

export const selectCurrentPokedexFilters = createSelector(
  selectPokedexState,
  (state: PokedexState) => state.filters
);
