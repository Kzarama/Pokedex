import { inject, Injectable } from '@angular/core';
import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { PokemonFilter } from '../../domain/repositories/pokemon.repository';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonsUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  searchPokemon(filters?: PokemonFilter) {
    return this.firestoreService.searchPokemon(filters);
  }
}
