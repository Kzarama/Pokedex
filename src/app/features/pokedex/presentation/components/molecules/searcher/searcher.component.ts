import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import * as PokedexActions from '../../../state/pokedex/pokedex.actions';
import { PokedexState } from '../../../state/pokedex/pokedex.state';

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
    this.searchInputSubject
      .pipe(debounceTime(1000), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((searchTerm) => {
        if (searchTerm === '') {
          return this.resetFilters();
        }

        const formattedSearchTerm =
          searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

        this.store.dispatch(
          PokedexActions.applyPokedexFilters({
            filters: { name: formattedSearchTerm },
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
