import { Pokemon } from '@/features/pokedex/domain/entities/pokemon.model';
import { Component, Input } from '@angular/core';
import { PokemonCardComponent } from '../../molecules/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
}
