import { InjectionToken } from '@angular/core';

export interface AppConfig {
  moduleScope: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('App Config');
