import { LocalStorageService } from '@/features/pokedex/infrastructure/repositories/local-storage.repository-impl';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteSessionUseCase {
  private sessionService = inject(LocalStorageService);

  deleteSession() {
    return this.sessionService.deleteSession();
  }
}
