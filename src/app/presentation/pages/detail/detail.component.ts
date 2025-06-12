import { PokemonTypeComponent } from '@/components/atoms/pokemon-type/pokemon-type.component';
import { Pokemon } from '@/core/models/pokemon.model';
import { FirestoreService } from '@/data/datasource/firestore.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [PokemonTypeComponent],
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

  private firestoreService: FirestoreService = inject(FirestoreService);

  constructor() {
    this.pokemonId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.firestoreService.loadPokemon(this.pokemonId).subscribe({
      next: (pokemonInfo) => this.pokemon.set(pokemonInfo),
    });
  }

  async updatePokemon(
    id: string,
    property: 'available' | 'obtained',
    value: boolean
  ) {
    this.pokemon.update((poke) => {
      return poke ? { ...poke, [property]: !value } : poke;
    });

    const pokemonToUpdate = {
      id,
      [property]: !value,
    };

    try {
      await this.firestoreService.updatePokemon(pokemonToUpdate);
    } catch (error) {
      console.error('Error al actualizar el Pokémon:', error);
    }
  }
}
