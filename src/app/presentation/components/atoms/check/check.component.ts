import { FirestoreService } from '@/core/application/services/firestore.service';
import { Component, inject, Input } from '@angular/core';
import { NotificationAdapterService } from 'presentation/shared/notification.service';

@Component({
  selector: 'app-check',
  imports: [],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss',
})
export class CheckComponent {
  @Input() id: string = '';
  @Input() text: string = '';
  @Input() checkId: 'available' | 'obtained' = 'available';
  @Input() value: boolean = false;
  private firestoreService: FirestoreService = inject(FirestoreService);
  private notificationService = inject(NotificationAdapterService);

  async updatePokemon(
    event: MouseEvent,
    id: string,
    property: 'available' | 'obtained',
    value: boolean
  ) {
    event.preventDefault();
    event.stopPropagation();

    const pokemonToUpdate = {
      id,
      [property]: !value,
    };

    try {
      await this.firestoreService.updatePokemon(pokemonToUpdate);
      this.notificationService.openSuccessSnackBar();
    } catch (error) {
      this.notificationService.openErrorSnackBar();
    }
  }
}
