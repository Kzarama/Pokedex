import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdatePokemonsUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  updatePokemon(pokemon: { id: string } & Partial<Omit<Pokemon, 'id'>>) {
    return this.firestoreService.updatePokemon(pokemon);
  }
}
