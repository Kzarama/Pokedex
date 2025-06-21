import { GetPokemonByIdUseCase } from '@/features/pokedex/application/use-cases/pokemon/get-pokemon-by-id.usecase';
import { Pokemon } from '@/features/pokedex/domain/entities/pokemon.model';
import { createEmptyPokemon } from '@/features/pokedex/domain/factories/pokemon.factory';
import { LoadingComponent } from '@/shared/components/loading/loading.component';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvolutionCardComponent } from '../../components/atoms/evolution-card/evolution-card.component';
import { PokemonTypeComponent } from '../../components/atoms/pokemon-type/pokemon-type.component';
import { ChecksComponent } from '../../components/molecules/checks/checks.component';
import { NotificationAdapterService } from '../../shared/notification.service';

@Component({
  selector: 'app-detail',
  imports: [
    PokemonTypeComponent,
    EvolutionCardComponent,
    ChecksComponent,
    LoadingComponent,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  pokemon = signal<Pokemon>(createEmptyPokemon());
  loading = true;

  private getPokemonByIdUseCase = inject(GetPokemonByIdUseCase);
  private notificationService = inject(NotificationAdapterService);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (!id) return;

      this.getPokemonByIdUseCase.getPokemonById(id).subscribe({
        next: (pokemonInfo) => {
          this.pokemon.set(pokemonInfo);
          this.loading = false;
        },
        error: () => this.notificationService.openErrorSnackBar(),
      });
    });
  }
}
