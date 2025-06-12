export interface Pokemon {
  id: string;
  name: string;
  avatar: string;
  color: string;
  types: string[];
  sprites: string[];
  available: boolean;
  obtained: boolean;
}
