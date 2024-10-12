import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: NG_EVENT_PLUGINS, useValue: NG_EVENT_PLUGINS },
    { provide: 'Pythons', useValue: ['Python1', 'Python2', 'Python3'] }, provideIonicAngular({}),
  ],
};
