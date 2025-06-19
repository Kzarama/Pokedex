import { Observable } from 'rxjs';
import { Pokemon, RegionalPokedex } from '../entities/pokemon.model';

export interface PokemonRepository {
  getPokemons(): Observable<RegionalPokedex[]>;

  getPokemonById(pokemonUidToFind: string): Observable<Pokemon>;

  updatePokemon(
    regionId: string,
    id: string,
    updates: { available?: boolean; obtained?: boolean }
  ): Promise<void>;

  searchPokemon(filters?: PokemonFilter): Observable<RegionalPokedex[]>;
}

export interface PokemonFilter {
  name?: string;
  available?: boolean;
  obtained?: boolean;
  megaEvolve?: boolean;
  gMax?: boolean;
}
