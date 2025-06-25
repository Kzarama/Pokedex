import * as PokedexSelectors from '@/core/state/search/search.selectors';
import { PokedexState } from '@/core/state/search/search.state';
import { SearchPokemonsUseCase } from '@/features/pokedex/application/use-cases/pokemon/search-pokemons.usecase';
import { SEARCH_TITLE } from '@/features/pokedex/domain/constants/constants';
import { RegionalPokedex } from '@/features/pokedex/domain/entities/pokemon.model';
import { LoadingComponent } from '@/shared/components/loading/loading.component';
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { select, Store } from '@ngrx/store';
import { catchError, of, switchMap, tap } from 'rxjs';
import { FiltersWrapperComponent } from '../../components/organisms/filters-wrapper/filters-wrapper.component';
import { PokemonListComponent } from '../../components/organisms/pokemon-list/pokemon-list.component';
import { NotificationAdapterService } from '../../shared/notification.service';

@Component({
  selector: 'app-search',
  imports: [LoadingComponent, PokemonListComponent, FiltersWrapperComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  isLoading = true;
  isEmptyFilters = true;
  pokemons = signal<RegionalPokedex[]>([]);
  searchTitle = SEARCH_TITLE;

  private searchPokemonsUseCase = inject(SearchPokemonsUseCase);
  private store = inject(Store<PokedexState>);
  private notificationService = inject(NotificationAdapterService);

  constructor() {
    this.store
      .pipe(
        select(PokedexSelectors.selectCurrentPokedexFilters),
        switchMap((filters) => {
          if (Object.keys(filters).length === 0) {
            this.isLoading = false;
            this.pokemons.set([]);
            this.isEmptyFilters = true;
            return [];
          }

          this.isEmptyFilters = false;

          return this.searchPokemonsUseCase.searchPokemon(filters).pipe(
            tap((data) => {
              this.pokemons.set(data);
              this.isLoading = false;
            }),
            catchError(() => {
              this.notificationService.openErrorSnackBar();
              this.isLoading = false;
              return of([]);
            })
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
