import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Microfrontend } from '@myorg/data';

interface RoutesOptions {
  appRoutes: Routes;
  scope: string;
  routePath?: string;
}

@Injectable({ providedIn: 'root' })
export class RouteBuilderService {
  microfrontends: Microfrontend[] = [];

  buildRoutes({ appRoutes, scope, routePath }: RoutesOptions): Routes {
    const lazyRoutes: Routes = this.microfrontends
      .filter((o) => o.scope === scope)
      .map((o) => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then((m) => m[o.ngModuleName]),
      }));

    if (routePath !== undefined) {
      return appRoutes.map((route) => {
        if (route.path === routePath) {
          return {
            ...route,
            children:
              (route.children && route?.children.concat(lazyRoutes)) ||
              lazyRoutes ||
              [],
          };
        }

        return route;
      });
    }

    return [...appRoutes, ...lazyRoutes];
  }
}
