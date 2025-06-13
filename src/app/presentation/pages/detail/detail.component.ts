import { CheckComponent } from '@/components/atoms/check/check.component';
import { PokemonTypeComponent } from '@/components/atoms/pokemon-type/pokemon-type.component';
import { FirestoreService } from '@/core/application/services/firestore.service';
import { Pokemon } from '@/core/models/pokemon.model';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationAdapterService } from 'presentation/shared/notification.service';

@Component({
  selector: 'app-detail',
  imports: [PokemonTypeComponent, CheckComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  pokemonId = -1;
  route: ActivatedRoute = inject(ActivatedRoute);
  pokemon = signal<Pokemon>({
    id: '',
    name: '',
    avatar: '',
    color: '',
    types: [],
    sprites: [],
    available: false,
    obtained: false,
  });

  private firestoreService: FirestoreService = inject(FirestoreService);
  private notificationService = inject(NotificationAdapterService);

  constructor() {
    this.pokemonId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.firestoreService.loadPokemon(this.pokemonId).subscribe({
      next: (pokemonInfo) => this.pokemon.set(pokemonInfo),
      error: () => {
        this.notificationService.openErrorSnackBar();
      },
    });
  }
}
