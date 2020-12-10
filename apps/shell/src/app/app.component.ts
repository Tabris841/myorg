import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from '@myorg/auth-lib';
import { Microfrontend } from '@myorg/data';

import { LookupService } from './microfrontends/lookup.service';
import { buildRoutes } from './utils/menu-utils';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  microfrontends: Microfrontend[] = [];

  constructor(
    private router: Router,
    private lookupService: LookupService,
    private service: AuthLibService
  ) {}

  async ngOnInit(): Promise<void> {
    this.service.login('Maxs', 'password');

    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}
