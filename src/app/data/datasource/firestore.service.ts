import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  DocumentReference,
  Firestore,
  orderBy,
  query,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pokemon } from '../../core/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);

  loadPokemons(): Observable<Pokemon[]> {
    const pokedexCollection = collection(this.firestore, 'Pokedex');
    const q = query(pokedexCollection, orderBy('uid', 'asc'));

    return collectionData(q, { idField: 'id' }) as Observable<Pokemon[]>;
  }

  async updatePokemon(
    pokemon: { id: string } & Partial<Omit<Pokemon, 'id'>>
  ): Promise<void> {
    try {
      const pokemonDocRef = doc(
        this.firestore,
        'Pokedex',
        pokemon.id
      ) as DocumentReference<Pokemon>;

      const { ...dataToUpdate } = pokemon;

      await updateDoc(pokemonDocRef, dataToUpdate);
    } catch (e) {
      console.error(`Error al actualizar documento Pokémon ${pokemon.id}: `, e);
      throw e;
    }
  }
}
