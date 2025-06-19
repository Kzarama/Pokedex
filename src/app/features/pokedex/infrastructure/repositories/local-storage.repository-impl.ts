import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getSession() {
    return localStorage.getItem('session') === environment.session.appSecret;
  }

  setSession(secretValue: string) {
    localStorage.setItem('session', secretValue);
  }

  deleteSession() {
    localStorage.removeItem('session');
  }
}
