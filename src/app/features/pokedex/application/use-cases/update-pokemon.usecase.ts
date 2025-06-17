import { inject, Injectable } from '@angular/core';
import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';

@Injectable({
  providedIn: 'root',
})
export class UpdatePokemonsUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  updatePokemon(
    regionId: string,
    id: string,
    updates: {
      available?: boolean;
      obtained?: boolean;
    }
  ) {
    return this.firestoreService.updatePokemon(regionId, id, updates);
  }
}
