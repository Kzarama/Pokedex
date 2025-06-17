import { UpdatePokemonsUseCase } from '@/features/pokedex/application/use-cases/update-pokemon.usecase';
import { createEmptyPokemon } from '@/features/pokedex/domain/factories/pokemon.factory';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import { getFontColor } from 'shared/utils/get-font-color';
import { NotificationAdapterService } from '../../../shared/notification.service';
import { CheckComponent } from '../../atoms/check/check.component';
import { PokemonTypeComponent } from '../../atoms/pokemon-type/pokemon-type.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [PokemonTypeComponent, CheckComponent, RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = createEmptyPokemon();
  @Input() regionPokemon: string = '';
  fontColor = '#fff';

  private updatePokemonUseCase = inject(UpdatePokemonsUseCase);
  private notificationService = inject(NotificationAdapterService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']) {
      this.fontColor = getFontColor(this.pokemon.color);
    }
  }

  async updatePokemon(
    event: MouseEvent,
    property: 'available' | 'obtained',
    checked: boolean
  ) {
    event.preventDefault();
    event.stopPropagation();

    if (property === 'obtained' && !this.pokemon.available) {
      return;
    }

    const pokemonToUpdate = {
      [property]: !checked,
      ...(property === 'available' && { obtained: false }),
    };

    try {
      await this.updatePokemonUseCase.updatePokemon(
        this.regionPokemon,
        this.pokemon.id,
        pokemonToUpdate
      );
      this.notificationService.openSuccessSnackBar();
    } catch (error) {
      this.notificationService.openErrorSnackBar();
    }
  }
}
