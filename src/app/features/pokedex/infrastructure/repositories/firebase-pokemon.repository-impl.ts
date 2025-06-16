import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  docData,
  DocumentReference,
  Firestore,
  orderBy,
  Query,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import {
  PokemonFilter,
  PokemonRepository,
} from 'features/pokedex/domain/repositories/pokemon.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService implements PokemonRepository {
  private firestore: Firestore = inject(Firestore);

  getPokemons(): Observable<Pokemon[]> {
    const pokedexCollection = collection(
      this.firestore,
      'Pokedex'
    ) as CollectionReference<Pokemon>;
    const q = query(pokedexCollection, orderBy('uid', 'asc'));

    return collectionData(q, { idField: 'id' });
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

      await updateDoc(pokemonDocRef, pokemon);
    } catch (e) {
      throw Error(`Error al actualizar documento Pokémon ${pokemon.id}: `);
    }
  }

  searchPokemon(filters?: PokemonFilter): Observable<Pokemon[]> {
    const pokedexCollection = collection(
      this.firestore,
      'Pokedex'
    ) as CollectionReference<Pokemon>;
    let q: Query<Pokemon> = query(pokedexCollection);

    if (filters?.name) {
      q = query(
        q,
        where('name', '>=', filters.name),
        where('name', '<=', `${filters.name}\uf8ff`)
      );
    }

    if (typeof filters?.available === 'boolean') {
      q = query(q, where('available', '==', filters.available));
    }

    if (typeof filters?.obtained === 'boolean') {
      q = query(q, where('obtained', '==', filters.obtained));
    }

    if (!filters) {
      q = query(q, orderBy('uid', 'asc'));
    }

    return collectionData(q, { idField: 'id' }).pipe(
      map((pokemons) => {
        if (filters) {
          return pokemons.sort(
            (a, b) => (Number(a.uid) || 0) - (Number(b.uid) || 0)
          );
        }
        return pokemons;
      })
    );
  }
}
