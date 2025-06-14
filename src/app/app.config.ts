import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
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
  ],
};
