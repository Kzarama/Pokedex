import { PokemonCardComponent } from '@/components/molecules/pokemon-card/pokemon-card.component';
import { Pokemon } from '@/core/models/pokemon.model';
import { FirestoreService } from '@/data/datasource/firestore.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

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

  private firestoreService: FirestoreService = inject(FirestoreService);

  constructor() {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.isLoading.set(true);

    this.firestoreService.loadPokemons().subscribe({
      next: (data) => {
        this.pokemons.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching pokemons:', err);
        this.isLoading.set(false);
      },
    });
  }
}
