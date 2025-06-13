import { CheckComponent } from '@/components/atoms/check/check.component';
import { PokemonTypeComponent } from '@/components/atoms/pokemon-type/pokemon-type.component';
import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from 'core/models/pokemon.model';
import { getFontColor } from 'shared/utils/get-font-color';

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
