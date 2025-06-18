import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  collectionGroup,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
  orderBy,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import {
  Pokemon,
  PokemonWithRegion,
  RegionalPokedex,
  RegionDocumentFirestore,
} from 'features/pokedex/domain/entities/pokemon.model';
import {
  PokemonFilter,
  PokemonRepository,
} from 'features/pokedex/domain/repositories/pokemon.repository';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService implements PokemonRepository {
  private firestore: Firestore = inject(Firestore);

  getPokemons(): Observable<RegionalPokedex[]> {
    const regionsCollectionRef = collection(
      this.firestore,
      'Pokedex'
    ) as CollectionReference<RegionDocumentFirestore>;
    const regionsQuery = query(regionsCollectionRef, orderBy('id', 'asc'));

    return collectionData(regionsQuery, { idField: 'id' }).pipe(
      switchMap((regionDocs: RegionDocumentFirestore[]) => {
        const regionalPokemonObservables: Observable<RegionalPokedex>[] =
          regionDocs.map((regionDoc) => {
            const pokemonsSubcollectionRef = collection(
              this.firestore,
              'Pokedex',
              regionDoc.id,
              'pokemons'
            ) as CollectionReference<Pokemon>;

            const pokemonsQuery = query(
              pokemonsSubcollectionRef,
              orderBy('uid', 'asc')
            );

            return collectionData(pokemonsQuery, { idField: 'uid' }).pipe(
              map((pokemonsInRegion: Pokemon[]) => ({
                id: regionDoc.id,
                pokemons: pokemonsInRegion,
              })),
              catchError(() => {
                return of({
                  id: regionDoc.id,
                  pokemons: [],
                } as RegionalPokedex);
              })
            );
          });

        if (regionalPokemonObservables.length === 0) {
          return of([]);
        }
        return combineLatest(regionalPokemonObservables);
      }),
      catchError((error) =>
        throwError(
          () =>
            new Error(error.message || 'Error al obtener Pokémon por regiones.')
        )
      )
    );
  }

  getPokemonById(id: string): Observable<PokemonWithRegion> {
    const pokemonsGroupRef = collectionGroup(
      this.firestore,
      'pokemons'
    ) as CollectionReference<Pokemon>;

    const q = query(pokemonsGroupRef, where('id', '==', id));

    return collectionData(q, { idField: 'id' }).pipe(
      take(1),
      map((pokemonDocs: Pokemon[]) => {
        const foundPokemon = pokemonDocs[0];

        return {
          pokemon: foundPokemon,
        } as PokemonWithRegion;
      }),
      catchError((error) => {
        return throwError(
          () =>
            new Error(error.message || `Error al obtener Pokémon con ID ${id}.`)
        );
      })
    );
  }

  async updatePokemon(
    regionId: string,
    id: string,
    updates: { available?: boolean; obtained?: boolean }
  ): Promise<void> {
    const pokemonDocId = String(id);

    const pokemonDocRef = doc(
      this.firestore,
      'Pokedex',
      regionId,
      'pokemons',
      pokemonDocId
    ) as DocumentReference<Pokemon>;

    try {
      await updateDoc(pokemonDocRef, updates);
    } catch (e: any) {
      throw new Error(
        `Error al actualizar Pokémon id '${id}' en la región '${regionId}': ${
          e.message || e
        }`
      );
    }
  }

  searchPokemon(filters?: PokemonFilter): Observable<RegionalPokedex[]> {
    const regionsCollectionRef = collection(
      this.firestore,
      'Pokedex'
    ) as CollectionReference<RegionDocumentFirestore>;

    const regionsQuery = query(regionsCollectionRef, orderBy('uid', 'asc'));

    return collectionData(regionsQuery, { idField: 'id' }).pipe(
      switchMap((regionDocs: RegionDocumentFirestore[]) => {
        const regionalPokemonObservables: Observable<RegionalPokedex>[] =
          regionDocs.map((regionDoc) => {
            const pokemonsSubcollectionRef = collection(
              this.firestore,
              'Pokedex',
              regionDoc.id,
              'pokemons'
            ) as CollectionReference<Pokemon>;

            let pokemonsQuery = query(pokemonsSubcollectionRef);

            pokemonsQuery = filters?.name
              ? query(
                  pokemonsQuery,
                  orderBy('uid', 'asc'),
                  where('name', '>=', filters.name),
                  where('name', '<=', `${filters.name}\uf8ff`)
                )
              : query(pokemonsQuery, orderBy('uid', 'asc'));

            if (typeof filters?.available === 'boolean') {
              pokemonsQuery = query(
                pokemonsQuery,
                where('available', '==', filters.available)
              );
            }

            if (typeof filters?.obtained === 'boolean') {
              pokemonsQuery = query(
                pokemonsQuery,
                where('obtained', '==', filters.obtained)
              );
            }

            return collectionData(pokemonsQuery, { idField: 'uid' }).pipe(
              map((pokemons: Pokemon[]) => {
                return {
                  id: regionDoc.id,
                  pokemons,
                };
              })
            );
          });

        if (regionalPokemonObservables.length === 0) {
          return of([]);
        }

        return combineLatest(regionalPokemonObservables);
      }),
      catchError((error) =>
        throwError(() => new Error(error.message || 'Error al buscar Pokémon.'))
      )
    );
  }
}
