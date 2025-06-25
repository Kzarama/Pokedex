import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonsByRegionUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  getAllPokemonsByRegion(region: string) {
    return this.firestoreService.getPokemonsByRegion(region);
  }
}
