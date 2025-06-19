import { GetPokemonsUseCase } from '@/features/pokedex/application/use-cases/pokemon/get-pokemons.usecase';
import { DeleteSessionUseCase } from '@/features/pokedex/application/use-cases/session/delete-session.usecase';
import { GetSessionUseCase } from '@/features/pokedex/application/use-cases/session/get-session.usecase';
import { SetSessionUseCase } from '@/features/pokedex/application/use-cases/session/set-session.usecase';
import { HOME_TITLE } from '@/features/pokedex/domain/constants/constants';
import { RegionalPokedex } from '@/features/pokedex/domain/entities/pokemon.model';
import { LoadingComponent } from '@/shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from '../../components/organisms/pokemon-list/pokemon-list.component';
import { NotificationAdapterService } from '../../shared/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonListComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pokemons = signal<RegionalPokedex[]>([]);
  isLoading = signal<boolean>(true);
  homeTitle = HOME_TITLE;
  session = false;

  private sessionUseCase = inject(GetSessionUseCase);
  private loginUseCase = inject(SetSessionUseCase);
  private deleteUseCase = inject(DeleteSessionUseCase);
  private getPokemonsUseCase = inject(GetPokemonsUseCase);
  private notificationService = inject(NotificationAdapterService);

  ngOnInit(): void {
    this.getAllPokemons();
    this.session = this.sessionUseCase.getSession();
  }

  getAllPokemons() {
    this.isLoading.set(true);
    this.getPokemonsUseCase.getAllPokemons().subscribe({
      next: (data) => {
        this.pokemons.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.notificationService.openErrorSnackBar();
        this.isLoading.set(false);
      },
    });
  }

  handleSession() {
    if (this.session) {
      this.deleteUseCase.deleteSession();
      window.location.reload();
    } else {
      const session = window.prompt('Sesión?');
      if (session) {
        this.loginUseCase.setSession(session);
        window.location.reload();
      }
    }
  }
}
