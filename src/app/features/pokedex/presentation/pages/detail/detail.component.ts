import { UpdatePokemonsUseCase } from '@/features/pokedex/application/use-cases/update-pokemon.usecase';
import { createEmptyPokemon } from '@/features/pokedex/domain/factories/pokemon.factory';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonByIdUseCase } from 'features/pokedex/application/use-cases/get-pokemon-by-id.usecase';
import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import { CheckComponent } from '../../components/atoms/check/check.component';
import { PokemonTypeComponent } from '../../components/atoms/pokemon-type/pokemon-type.component';
import { NotificationAdapterService } from '../../shared/notification.service';

@Component({
  selector: 'app-detail',
  imports: [PokemonTypeComponent, CheckComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  @Input() id!: string;
  route: ActivatedRoute = inject(ActivatedRoute);
  pokemon = signal<{ pokemon: Pokemon; regionId: string }>({
    pokemon: createEmptyPokemon(),
    regionId: '',
  });

  private getPokemonByIdUseCase = inject(GetPokemonByIdUseCase);
  private updatePokemonUseCase = inject(UpdatePokemonsUseCase);
  private notificationService = inject(NotificationAdapterService);

  ngOnInit(): void {
    this.getPokemonByIdUseCase.getPokemonById(this.id).subscribe({
      next: (pokemonInfo) => this.pokemon.set(pokemonInfo),
      error: () => {
        this.notificationService.openErrorSnackBar();
      },
    });
  }

  async updatePokemon(property: 'available' | 'obtained', checked: boolean) {
    if (property === 'obtained' && !this.pokemon().pokemon.available) {
      return;
    }

    const pokemonToUpdate = {
      [property]: !checked,
      ...(property === 'available' && { obtained: false }),
    };

    try {
      await this.updatePokemonUseCase.updatePokemon(
        this.pokemon().pokemon.regionName.toLowerCase(),
        this.pokemon().pokemon.id,
        pokemonToUpdate
      );
      this.notificationService.openSuccessSnackBar();
    } catch (error) {
      this.notificationService.openErrorSnackBar();
    }
  }
}
