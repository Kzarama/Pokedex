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
import { FiltersComponent } from '../../components/organisms/filters/filters.component';
import { PokemonListComponent } from '../../components/organisms/pokemon-list/pokemon-list.component';
import { NotificationAdapterService } from '../../shared/notification.service';

@Component({
  selector: 'app-search',
  imports: [LoadingComponent, PokemonListComponent, FiltersComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  isLoading = signal<boolean>(true);
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
          this.isLoading.set(true);
          return this.searchPokemonsUseCase.searchPokemon(filters).pipe(
            tap((data) => {
              this.pokemons.set(data);
              this.isLoading.set(false);
            }),
            catchError(() => {
              this.notificationService.openErrorSnackBar();
              this.isLoading.set(false);
              return of([]);
            })
          );
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
