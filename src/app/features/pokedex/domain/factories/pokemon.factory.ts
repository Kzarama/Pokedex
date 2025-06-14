import { Pokemon } from '../entities/pokemon.model';

export function createEmptyPokemon(): Pokemon {
  return {
    id: '',
    uid: '',
    name: '',
    avatar: '',
    color: '',
    types: [],
    sprites: [],
    available: false,
    obtained: false,
  };
}
