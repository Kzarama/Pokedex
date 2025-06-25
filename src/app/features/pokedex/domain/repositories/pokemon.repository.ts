import { Observable } from 'rxjs';
import {
  Pokemon,
  PokemonFilter,
  RegionalPokedex,
  RegionDocumentFirestore,
} from '../entities/pokemon.model';

export interface PokemonRepository {
  getPokemonById(pokemonUidToFind: string): Observable<Pokemon>;

  updatePokemon(
    regionId: string,
    id: string,
    updates: { available?: boolean; obtained?: boolean }
  ): Promise<void>;

  getRegions(): Observable<RegionDocumentFirestore[]>;

  getPokemonsByRegion(region: string): Observable<Pokemon[]>;

  searchPokemon(filters?: PokemonFilter): Observable<RegionalPokedex[]>;
}
