import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  orderBy,
  query,
  updateDoc,
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
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

  loadPokemon(id: number): Observable<Pokemon> {
    const pokemonDocRef = doc(this.firestore, 'Pokedex', String(id));

    return from(getDoc(pokemonDocRef)).pipe(
      map((docSnap) => {
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() } as Pokemon;
        }
        throw new Error('No se ha encontrado el Pokemon');
      })
    );
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
