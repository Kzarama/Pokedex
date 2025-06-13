import { Component, Input } from '@angular/core';
import { colors } from 'features/pokedex/presentation/styles/colors.enum';

@Component({
  selector: 'app-pokemon-type',
  imports: [],
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.scss',
})
export class PokemonTypeComponent {
  @Input() types: string[] = [];
  @Input() textSize: string = '14px';
  colors: any = colors;
}
