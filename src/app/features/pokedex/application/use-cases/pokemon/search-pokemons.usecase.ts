import { PokemonFilter } from '@/features/pokedex/domain/entities/pokemon.model';
import { FirestoreService } from '@/features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonsUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  searchPokemon(filters?: PokemonFilter) {
    return this.firestoreService.searchPokemon(filters);
  }
}
