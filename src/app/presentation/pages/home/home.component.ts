import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../../../core/models/pokemon.model';
import { FirestoreService } from '../../../data/datasource/firestore.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pokemons = signal<Pokemon[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  private firestoreService: FirestoreService = inject(FirestoreService);

  constructor() {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.firestoreService.loadPokemons().subscribe({
      next: (data) => {
        this.pokemons.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching pokemons:', err);
        this.error.set(
          'Error al cargar los Pokémon. Inténtalo de nuevo más tarde.'
        );
        this.isLoading.set(false);
      },
    });
  }

  async updatePokemon(
    id: string,
    property: 'available' | 'obtained',
    value: boolean
  ) {
    if (!['available', 'obtained'].includes(property)) {
      console.error(`Propiedad no válida para actualizar: ${property}`);
      return;
    }

    this.pokemons.update((pokes) =>
      pokes.map((poke) =>
        poke.id === id ? { ...poke, [property]: !value } : poke
      )
    );

    const pokemonToUpdate = {
      id,
      [property]: !value,
    };

    try {
      await this.firestoreService.updatePokemon(pokemonToUpdate);
    } catch (error) {
      console.error('Error al actualizar el Pokémon:', error);
      this.error.set(`Error al actualizar el Pokémon ${id}.`);
      this.pokemons.update((pokes) =>
        pokes.map((poke) =>
          poke.id === id ? { ...poke, [property]: value } : poke
        )
      );
    }
  }
}
