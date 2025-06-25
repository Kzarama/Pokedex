import * as PokedexActions from '@/core/state/search/search.actions';
import * as PokedexSelectors from '@/core/state/search/search.selectors';
import { PokedexState } from '@/core/state/search/search.state';
import { PokemonFilter } from '@/features/pokedex/domain/entities/pokemon.model';
import { CheckComponent } from '@/shared/components/check/check.component';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { ButtonComponent } from '../../atoms/button/button.component';

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
    megaEvolve: false,
    gMax: false,
  };

  private store = inject(Store<PokedexState>);
  private dialog = inject(MatDialog);

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
          megaEvolve: filters.megaEvolve ?? undefined,
          gMax: filters.gMax ?? undefined,
        };
      });
  }

  handleTristateCheckboxChange(
    property: 'available' | 'obtained' | 'megaEvolve' | 'gMax',
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
    this.dialog.closeAll();

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
    if (this.filterForm.megaEvolve) {
      filtersToDispatch.megaEvolve = this.filterForm.megaEvolve;
    }
    if (this.filterForm.gMax) {
      filtersToDispatch.gMax = this.filterForm.gMax;
    }

    this.store.dispatch(
      PokedexActions.applyPokedexFilters({ filters: filtersToDispatch })
    );
  }

  resetFilters(): void {
    this.dialog.closeAll();
    this.filterForm = {};
    this.store.dispatch(PokedexActions.resetPokedexFilters());
  }
}
