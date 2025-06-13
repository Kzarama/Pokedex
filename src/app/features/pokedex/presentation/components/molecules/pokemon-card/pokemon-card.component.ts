import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from 'features/pokedex/domain/entities/pokemon.model';
import { getFontColor } from 'shared/utils/get-font-color';
import { PokemonTypeComponent } from '../../atoms/pokemon-type/pokemon-type.component';
import { CheckComponent } from '../../atoms/check/check.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [PokemonTypeComponent, CheckComponent, RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = {
    id: '',
    name: '',
    avatar: '',
    color: '',
    types: [],
    sprites: [],
    available: false,
    obtained: false,
  };

  fontColor = '#fff';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']) {
      this.fontColor = getFontColor(this.pokemon.color);
    }
  }
}
