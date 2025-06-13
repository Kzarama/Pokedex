import { inject, Injectable } from '@angular/core';
import { FirestoreService } from '../../application/services/firestore.service';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonsService {
  private firestoreService: FirestoreService = inject(FirestoreService);

  loadPokemons() {
    return this.firestoreService.loadPokemons();
  }
}
