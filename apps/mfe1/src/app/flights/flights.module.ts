import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES } from '@angular/router';
import { AuthLibModule } from '@tabris84/auth-lib';
import { RouteBuilderService, RouteLibModule } from '@myorg/route-lib';

import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { FLIGHTS_ROUTES } from './flights.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    AuthLibModule,
    RouteLibModule,
  ],
  declarations: [FlightsSearchComponent],
  providers: [
    {
      provide: ROUTES,
      useFactory: (routeBuilderService: RouteBuilderService) => {
        const moduleScope = 'Flights';
        const routes = routeBuilderService.buildRoutes({
          appRoutes: [...FLIGHTS_ROUTES],
          scope: moduleScope,
          routePath: '',
        });

        console.log(routes);
        return routes;
      },
      deps: [RouteBuilderService],
      multi: true,
    },
  ],
})
export class FlightsModule {}
