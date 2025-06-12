import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'pokedex-app-kz',
        appId: '1:1008231510677:web:5eecae2e0ba6f09905219c',
        storageBucket: 'pokedex-app-kz.firebasestorage.app',
        apiKey: 'AIzaSyBzVDTF-sP49XdSekNWW5ljKFA1vP62P4M',
        authDomain: 'pokedex-app-kz.firebaseapp.com',
        messagingSenderId: '1008231510677',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
