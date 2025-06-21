import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import {
  pokedexFeatureKey,
  pokedexReducer,
} from './core/state/search/search.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: environment.firebase.projectId,
        appId: environment.firebase.appId,
        storageBucket: environment.firebase.storageBucket,
        apiKey: environment.firebase.apiKey,
        authDomain: environment.firebase.authDomain,
        messagingSenderId: environment.firebase.messagingSenderId,
      })
    ),
    provideFirestore(() => getFirestore()),

    provideStore(),
    provideState(pokedexFeatureKey, pokedexReducer),
    provideStoreDevtools({
      maxAge: 25,
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
};
