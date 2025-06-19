import { LocalStorageService } from '@/features/pokedex/infrastructure/repositories/local-storage.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SetSessionUseCase {
  private sessionService = inject(LocalStorageService);

  setSession(sessionValue: string) {
    return this.sessionService.setSession(sessionValue);
  }
}
