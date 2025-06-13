import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import { GetPokemonUseCase } from 'features/pokedex/application/use-cases/get-pokemon-by-id.usecase';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeComponent } from '../../components/atoms/pokemon-type/pokemon-type.component';
import { CheckComponent } from '../../components/atoms/check/check.component';
import { NotificationAdapterService } from '../../shared/notification.service';

@Component({
  selector: 'app-detail',
  imports: [PokemonTypeComponent, CheckComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  pokemonId = -1;
  route: ActivatedRoute = inject(ActivatedRoute);
  pokemon = signal<Pokemon>({
    id: '',
    name: '',
    avatar: '',
    color: '',
    types: [],
    sprites: [],
    available: false,
    obtained: false,
  });

  private useCase = inject(GetPokemonUseCase);
  private notificationService = inject(NotificationAdapterService);

  constructor() {
    this.pokemonId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.useCase.getPokemon(this.pokemonId).subscribe({
      next: (pokemonInfo) => this.pokemon.set(pokemonInfo),
      error: () => {
        this.notificationService.openErrorSnackBar();
      },
    });
  }
}
