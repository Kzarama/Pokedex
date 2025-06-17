import { Observable } from 'rxjs';
import { PokemonWithRegion, RegionalPokedex } from '../entities/pokemon.model';

export interface PokemonRepository {
  getPokemons(): Observable<RegionalPokedex[]>;

  getPokemonById(pokemonUidToFind: string): Observable<PokemonWithRegion>;

  updatePokemon(
    regionId: string,
    id: string,
    updates: { available?: boolean; obtained?: boolean }
  ): Promise<void>;

  searchPokemon(filters?: PokemonFilter): Observable<RegionalPokedex[]>;
}

export interface PokemonFilter {
  available?: boolean;
  obtained?: boolean;
  name?: string;
}
