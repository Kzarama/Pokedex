import * as PokedexActions from '@/core/state/search/search.actions';
import * as PokedexSelectors from '@/core/state/search/search.selectors';
import { PokedexState } from '@/core/state/search/search.state';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-searcher',
  imports: [MatIconModule, FormsModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss',
})
export class SearcherComponent {
  searchControl: string = '';
  @ViewChild('myInputField') myInputField!: ElementRef<HTMLInputElement>;

  private store = inject(Store<PokedexState>);
  private searchInputSubject = new Subject<string>();
  private router = inject(Router);

  constructor() {
    this.store
      .pipe(
        select(PokedexSelectors.selectCurrentPokedexFilters),
        takeUntilDestroyed()
      )
      .subscribe((filters) => {
        const storeSearchName = filters.name || '';
        if (this.searchControl !== storeSearchName) {
          this.searchControl = storeSearchName;
        }
      });

    this.searchInputSubject
      .pipe(debounceTime(1000), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((searchTerm) => {
        if (searchTerm === '') {
          return this.resetFilters();
        }

        this.store.dispatch(
          PokedexActions.applyPokedexFilters({
            filters: { name: searchTerm },
          })
        );

        this.router.navigate(['/search']);
      });
  }

  focusInput(): void {
    if (this.myInputField) {
      this.myInputField.nativeElement.focus();
    }
  }

  onSearchInputChange(): void {
    this.searchInputSubject.next(this.searchControl);
  }

  resetFilters(): void {
    this.store.dispatch(PokedexActions.resetPokedexFilters());
  }
}
