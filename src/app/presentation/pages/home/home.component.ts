import { PokemonCardComponent } from '@/components/molecules/pokemon-card/pokemon-card.component';
import { FirestoreService } from '@/core/application/services/firestore.service';
import { Pokemon } from '@/core/models/pokemon.model';
import { GetPokemonsService } from '@/core/use-cases/get-pokemons.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { NotificationAdapterService } from 'presentation/shared/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pokemons = signal<Pokemon[]>([]);
  isLoading = signal<boolean>(true);

  useCase = inject(GetPokemonsService);
  private notificationService = inject(NotificationAdapterService);

  constructor() {}

  ngOnInit(): void {
    this.isLoading.set(true);
    this.useCase.loadPokemons().subscribe({
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
