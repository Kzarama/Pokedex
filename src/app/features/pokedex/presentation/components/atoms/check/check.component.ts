import { Component, inject, Input } from '@angular/core';
import { UpdatePokemonsUseCase } from 'features/pokedex/application/use-cases/update-pokemon.usecase';
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
  @Input() disabled: boolean = false;

  private notificationService = inject(NotificationAdapterService);
  private updatePokemonUseCase = inject(UpdatePokemonsUseCase);

  async updatePokemon(
    event: MouseEvent,
    id: string,
    property: 'available' | 'obtained',
    value: boolean
  ) {
    event.preventDefault();
    event.stopPropagation();

    if (this.disabled) {
      return;
    }

    const pokemonToUpdate = {
      id,
      [property]: !value,
      ...(property === 'available' && { obtained: false }),
    };

    try {
      await this.updatePokemonUseCase.updatePokemon(pokemonToUpdate);
      this.notificationService.openSuccessSnackBar();
    } catch (error) {
      this.notificationService.openErrorSnackBar();
    }
  }
}
