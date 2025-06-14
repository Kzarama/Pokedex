import { createEmptyPokemon } from '@/features/pokedex/domain/factories/pokemon.factory';
import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import { getFontColor } from 'shared/utils/get-font-color';
import { PokemonTypeComponent } from '../../atoms/pokemon-type/pokemon-type.component';
import { ChecksComponent } from '../checks/checks.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [PokemonTypeComponent, ChecksComponent, RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = createEmptyPokemon();

  fontColor = '#fff';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']) {
      this.fontColor = getFontColor(this.pokemon.color);
    }
  }
}
