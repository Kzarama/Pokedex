import { Observable } from 'rxjs';
import { Pokemon } from '../entities/pokemon.model';

export interface PokemonRepository {
  getPokemons(): Observable<Pokemon[]>;
  getPokemonById(id: string): Observable<Pokemon>;
  updatePokemon(
    pokemon: { id: string } & Partial<Omit<Pokemon, 'id'>>
  ): Promise<void>;
}
