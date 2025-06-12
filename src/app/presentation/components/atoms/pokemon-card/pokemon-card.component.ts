import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from 'core/models/pokemon.model';
import { FirestoreService } from 'data/datasource/firestore.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pokemon-card',
  imports: [RouterLink],
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
  private firestoreService: FirestoreService = inject(FirestoreService);
  private _snackBar = inject(MatSnackBar);

  async updatePokemon(
    event: MouseEvent,
    id: string,
    property: 'available' | 'obtained',
    value: boolean
  ) {
    event.preventDefault();
    event.stopPropagation();

    const pokemonToUpdate = {
      id,
      [property]: !value,
    };

    try {
      await this.firestoreService.updatePokemon(pokemonToUpdate);
      this.openSnackBar();
    } catch (error) {
      console.error('Error al actualizar el Pokémon:', error);
    }
  }

  openSnackBar() {
    this._snackBar.open('Cambiado XD', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['card-snack-success'],
    });
  }
}
