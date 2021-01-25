import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthLibModule } from '@tabris84/auth-lib';
import { RouteBuilderService, RouteLibModule } from '@myorg/route-lib';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { LookupService } from './microfrontends/lookup.service';
import { APP_CONFIG, AppConfig } from './app.config';

@NgModule({
  declarations: [AppComponent, HomeComponent, ConfigComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    AuthLibModule,
    RouteLibModule,
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: {
        moduleScope: 'Shell',
      },
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (
        lookupService: LookupService,
        routeBuilderService: RouteBuilderService,
        router: Router,
        config: AppConfig
      ) => {
        return async () => {
          routeBuilderService.microfrontends = await lookupService.lookup();

          const routes = routeBuilderService.buildRoutes({
            appRoutes: APP_ROUTES,
            scope: config.moduleScope,
          });

          router.resetConfig(routes);
        };
      },
      multi: true,
      deps: [LookupService, RouteBuilderService, Router, APP_CONFIG],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
