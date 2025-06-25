import { GetPokemonsByRegionUseCase } from '@/features/pokedex/application/use-cases/pokemon/get-pokemons-by-region.usecase';
import { Pokemon } from '@/features/pokedex/domain/entities/pokemon.model';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-region-panel',
  imports: [MatExpansionModule, PokemonCardComponent],
  templateUrl: './region-panel.component.html',
  styleUrl: './region-panel.component.scss',
})
export class RegionPanelComponent implements OnInit {
  @Input() region = '';

  panelIsExpanded = false;
  pokemons = signal<Pokemon[]>([]);

  private getPokemonsByRegion = inject(GetPokemonsByRegionUseCase);

  ngOnInit(): void {
    if (this.region === 'kanto') this.panelIsExpanded = true;
  }

  onOpenPanel() {
    if (this.pokemons().length === 0) {
      this.getPokemonsByRegion.getAllPokemonsByRegion(this.region).subscribe({
        next: (data) => this.pokemons.set(data),
      });
    }
  }
}
