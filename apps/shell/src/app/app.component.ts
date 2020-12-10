import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Microfrontend } from '@myorg/data';

import { LookupService } from './microfrontends/lookup.service';
import { buildRoutes } from './utils/menu-utils';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  microfrontends: Microfrontend[] = [];

  constructor(private router: Router, private lookupService: LookupService) {}

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}
