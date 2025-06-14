import { Pokemon } from '@/features/pokedex/domain/entities/pokemon.model';
import { createEmptyPokemon } from '@/features/pokedex/domain/factories/pokemon.factory';
import { Component, Input } from '@angular/core';
import { CheckComponent } from '../../atoms/check/check.component';

@Component({
  selector: 'app-checks',
  imports: [CheckComponent],
  templateUrl: './checks.component.html',
  styleUrl: './checks.component.scss',
})
export class ChecksComponent {
  @Input() pokemon: Pokemon = createEmptyPokemon();
  @Input() hasColor = false;
}
