import { FirestoreService } from 'features/pokedex/infrastructure/repositories/firebase-pokemon.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetRegionsUseCase {
  private firestoreService: FirestoreService = inject(FirestoreService);

  getAllRegions() {
    return this.firestoreService.getRegions();
  }
}
