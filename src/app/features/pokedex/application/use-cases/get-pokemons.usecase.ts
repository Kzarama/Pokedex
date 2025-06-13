import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonsUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  getAllPokemons() {
    return this.firestoreService.getPokemons();
  }
}
