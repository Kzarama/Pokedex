export interface Pokemon {
  id: string;
  uid: string;
  name: string;
  avatar: string;
  color: string;
  types: string[];
  sprites: string[];
  available: boolean;
  obtained: boolean;
}
