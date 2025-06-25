import { GetRegionsUseCase } from '@/features/pokedex/application/use-cases/pokemon/get-regions.usecase';
import {
  RegionalPokedex,
  RegionDocumentFirestore,
} from '@/features/pokedex/domain/entities/pokemon.model';
import { LoadingComponent } from '@/shared/components/loading/loading.component';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PokemonCardComponent } from '../../molecules/pokemon-card/pokemon-card.component';
import { RegionPanelComponent } from '../../molecules/region-panel/region-panel.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [
    MatExpansionModule,
    RegionPanelComponent,
    LoadingComponent,
    PokemonCardComponent,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonsRegion: RegionalPokedex[] = [];
  regions: RegionDocumentFirestore[] = [];
  loading = true;

  private regionsUseCase = inject(GetRegionsUseCase);

  ngOnInit(): void {
    if (this.pokemonsRegion.length === 0) {
      this.regionsUseCase.getAllRegions().subscribe({
        next: (data) => {
          this.regions = data;
          this.loading = false;
        },
      });
    } else {
      this.loading = false;
    }
  }
}
