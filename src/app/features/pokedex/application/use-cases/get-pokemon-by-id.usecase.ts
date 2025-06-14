import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  getPokemon(id: string) {
    return this.firestoreService.getPokemonById(id);
  }
}
