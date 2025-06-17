export interface RegionalPokedex {
  id: string;
  uid: number;
  group: string;
  pokemons: Pokemon[];
}

export interface Pokemon {
  regionName: string;
  id: string;
  uid: number;
  name: string;
  avatar: string;
  color: string;
  types: string[];
  sprites: string[];
  available: boolean;
  obtained: boolean;
}

export interface PokemonWithRegion {
  pokemon: Pokemon;
  regionId: string;
  regionName: string;
}

export interface RegionDocumentFirestore {
  id: string;
  uid: number;
  group: string;
}

export interface PokemonFilter {
  name?: string;
  available?: boolean;
  obtained?: boolean;
}
