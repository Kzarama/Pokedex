import { LocalStorageService } from '@/features/pokedex/infrastructure/repositories/local-storage.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetSessionUseCase {
  private sessionService = inject(LocalStorageService);

  getSession() {
    return this.sessionService.getSession();
  }
}
