import { UpdatePokemonsUseCase } from '@/features/pokedex/application/use-cases/pokemon/update-pokemon.usecase';
import { GetSessionUseCase } from '@/features/pokedex/application/use-cases/session/get-session.usecase';
import { createEmptyPokemon } from '@/features/pokedex/domain/factories/pokemon.factory';
import { CheckComponent } from '@/shared/components/check/check.component';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NotificationAdapterService } from '../../../shared/notification.service';

@Component({
  selector: 'app-checks',
  imports: [CheckComponent],
  templateUrl: './checks.component.html',
  styleUrl: './checks.component.scss',
})
export class ChecksComponent implements OnInit {
  @Input() pokemon = createEmptyPokemon();
  @Input() color: string | undefined = undefined;
  @Output() action = new EventEmitter();
  hasSession = false;

  private loginUseCase = inject(GetSessionUseCase);
  private updatePokemonUseCase = inject(UpdatePokemonsUseCase);
  private notificationService = inject(NotificationAdapterService);

  ngOnInit(): void {
    this.hasSession = this.loginUseCase.getSession();
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
        this.pokemon.regionName.toLowerCase(),
        this.pokemon.id,
        pokemonToUpdate
      );
      this.notificationService.openSuccessSnackBar();
    } catch (error) {
      this.notificationService.openErrorSnackBar();
    }
  }
}
