import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FilterDialogComponent } from '../../molecules/filters-dialog/filters-dialog.component';
import { FiltersComponent } from '../../molecules/filters/filters.component';

@Component({
  selector: 'app-filters-wrapper',
  standalone: true,
  imports: [FiltersComponent, ButtonComponent],
  templateUrl: './filters-wrapper.component.html',
  styleUrl: './filters-wrapper.component.scss',
})
export class FiltersWrapperComponent {
  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(FilterDialogComponent);
  }
}
