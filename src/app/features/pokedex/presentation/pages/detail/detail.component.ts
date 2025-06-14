import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonUseCase } from 'features/pokedex/application/use-cases/get-pokemon-by-id.usecase';
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

  ngOnInit(): void {
    this.useCase.getPokemon(this.id).subscribe({
      next: (pokemonInfo) => this.pokemon.set(pokemonInfo),
      error: () => {
        this.notificationService.openErrorSnackBar();
      },
    });
  }
}
