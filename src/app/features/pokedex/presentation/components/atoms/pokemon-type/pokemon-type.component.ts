import { Component, Input, SimpleChanges } from '@angular/core';
import { colors } from 'features/pokedex/presentation/styles/colors.enum';
import { getFontColor } from 'shared/utils/get-font-color';

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

  typesData: any = this.types;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['types']) {
      this.typesData = this.types.map((type) => ({
        type,
        color: getFontColor(this.colors[type], 180),
      }));
    }
  }
}
