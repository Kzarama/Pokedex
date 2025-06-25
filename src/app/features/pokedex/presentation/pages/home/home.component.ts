import { DeleteSessionUseCase } from '@/features/pokedex/application/use-cases/session/delete-session.usecase';
import { GetSessionUseCase } from '@/features/pokedex/application/use-cases/session/get-session.usecase';
import { SetSessionUseCase } from '@/features/pokedex/application/use-cases/session/set-session.usecase';
import { HOME_TITLE } from '@/features/pokedex/domain/constants/constants';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PokemonListComponent } from '../../components/organisms/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  homeTitle = HOME_TITLE;
  session = false;

  private sessionUseCase = inject(GetSessionUseCase);
  private loginUseCase = inject(SetSessionUseCase);
  private deleteUseCase = inject(DeleteSessionUseCase);

  ngOnInit(): void {
    this.session = this.sessionUseCase.getSession();
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
