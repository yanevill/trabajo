import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { router } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(router)
    , provideClientHydration()
  ,provideHttpClient(withFetch()),DatePipe]
};
