import { GetPokemonsUseCase } from '@/features/pokedex/application/use-cases/get-pokemons.usecase';
import { LoadingComponent } from '@/shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { HOME_TITLE } from 'features/pokedex/domain/constants/constants';
import { RegionalPokedex } from 'features/pokedex/domain/entities/pokemon.model';
import { PokemonListComponent } from '../../components/organisms/pokemon-list/pokemon-list.component';
import { NotificationAdapterService } from '../../shared/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonListComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pokemons = signal<RegionalPokedex[]>([]);
  isLoading = signal<boolean>(true);
  homeTitle = HOME_TITLE;

  private getPokemonsUseCase = inject(GetPokemonsUseCase);
  private notificationService = inject(NotificationAdapterService);

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.isLoading.set(true);
    this.getPokemonsUseCase.getAllPokemons().subscribe({
      next: (data) => {
        this.pokemons.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.notificationService.openErrorSnackBar();
        this.isLoading.set(false);
      },
    });
  }
}
