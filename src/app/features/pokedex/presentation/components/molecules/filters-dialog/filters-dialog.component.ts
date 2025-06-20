import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogContent, FiltersComponent],
  templateUrl: './filters-dialog.component.html',
  styleUrl: './filters-dialog.component.scss',
})
export class FilterDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
