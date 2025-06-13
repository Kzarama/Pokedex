import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationAdapterService {
  private _snackBar = inject(MatSnackBar);

  openSuccessSnackBar() {
    this._snackBar.open('Cambiado XD', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['card-snack-success'],
    });
  }

  openErrorSnackBar() {
    this._snackBar.open('Error', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['card-snack-error'],
    });
  }
}
