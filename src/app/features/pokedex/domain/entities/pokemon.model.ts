export interface RegionalPokedex {
  id: string;
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
  evolutions?: { id: string; uid: number; name: string; avatar: string }[];
  forms?: { id: string; uid: number; name: string; avatar: string }[];
}

export interface RegionDocumentFirestore {
  id: string;
}

export interface PokemonFilter {
  name?: string;
  available?: boolean;
  obtained?: boolean;
  megaEvolve?: boolean;
  gMax?: boolean;
}
