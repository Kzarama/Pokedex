import { inject, Injectable } from '@angular/core';
import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { Pokemon } from '../../domain/entities/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonsUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  searchPokemon(filters?: Partial<Pokemon> | undefined) {
    return this.firestoreService.searchPokemon(filters);
  }
}
