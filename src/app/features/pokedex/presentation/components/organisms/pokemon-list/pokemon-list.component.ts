import { RegionalPokedex } from '@/features/pokedex/domain/entities/pokemon.model';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PokemonCardComponent } from '../../molecules/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, MatExpansionModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input() pokemonsRegion: RegionalPokedex[] = [];
}
