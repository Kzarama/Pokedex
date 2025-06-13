import { UpdatePokemonsUseCase } from 'features/pokedex/application/use-cases/update-pokemon.usecase';
import { Component, inject, Input } from '@angular/core';
import { NotificationAdapterService } from 'features/pokedex/presentation/shared/notification.service';

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
  @Input() color: string = '#fff';
  private notificationService = inject(NotificationAdapterService);
  private useCase = inject(UpdatePokemonsUseCase);

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
      await this.useCase.updatePokemon(pokemonToUpdate);
      this.notificationService.openSuccessSnackBar();
    } catch (error) {
      this.notificationService.openErrorSnackBar();
    }
  }
}
