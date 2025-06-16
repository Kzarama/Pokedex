import { PokemonFilter } from '@/features/pokedex/domain/repositories/pokemon.repository';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as PokedexActions from '../../../state/pokedex/pokedex.actions';
import * as PokedexSelectors from '../../../state/pokedex/pokedex.selectors';
import { PokedexState } from '../../../state/pokedex/pokedex.state';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CheckComponent } from '../../atoms/check/check.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CheckComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  filterForm: PokemonFilter = {
    available: undefined,
    obtained: undefined,
  };

  private store = inject(Store<PokedexState>);

  constructor() {
    this.store
      .pipe(
        select(PokedexSelectors.selectCurrentPokedexFilters),
        takeUntilDestroyed()
      )
      .subscribe((filters) => {
        this.filterForm = {
          name: filters.name || undefined,
          available:
            typeof filters.available === 'boolean'
              ? filters.available
              : undefined,
          obtained:
            typeof filters.obtained === 'boolean'
              ? filters.obtained
              : undefined,
        };
      });
  }

  handleTristateCheckboxChange(
    property: 'available' | 'obtained',
    currentValue: boolean | undefined
  ): void {
    if (currentValue === undefined) {
      this.filterForm[property] = true;
    } else if (currentValue === true) {
      this.filterForm[property] = false;
    } else {
      this.filterForm[property] = undefined;
    }
  }

  applyFilters(): void {
    const filtersToDispatch: PokemonFilter = {};

    if (this.filterForm.name) {
      filtersToDispatch.name = this.filterForm.name;
    }
    if (typeof this.filterForm.available === 'boolean') {
      filtersToDispatch.available = this.filterForm.available;
    }
    if (typeof this.filterForm.obtained === 'boolean') {
      filtersToDispatch.obtained = this.filterForm.obtained;
    }

    this.store.dispatch(
      PokedexActions.applyPokedexFilters({ filters: filtersToDispatch })
    );
  }

  resetFilters(): void {
    this.filterForm = {};
    this.store.dispatch(PokedexActions.resetPokedexFilters());
  }
}
