import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  DocumentReference,
  Firestore,
  orderBy,
  query,
  updateDoc,
} from '@angular/fire/firestore';
import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import { PokemonRepository } from 'features/pokedex/domain/repositories/pokemon.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService implements PokemonRepository {
  private firestore: Firestore = inject(Firestore);

  getPokemons(): Observable<Pokemon[]> {
    const pokedexCollection = collection(this.firestore, 'Pokedex');
    const q = query(pokedexCollection, orderBy('uid', 'asc'));

    return collectionData(q, { idField: 'id' }) as Observable<Pokemon[]>;
  }

  getPokemonById(id: string): Observable<Pokemon> {
    const pokemonDocRef = doc(this.firestore, 'Pokedex', String(id));

    return docData(pokemonDocRef, { idField: 'id' }) as Observable<Pokemon>;
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
      throw Error(`Error al actualizar documento Pokémon ${pokemon.id}: `);
    }
  }
}
