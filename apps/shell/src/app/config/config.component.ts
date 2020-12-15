import { Component, OnInit } from '@angular/core';
import { Microfrontend } from '@myorg/data';

import { LookupService } from '../microfrontends/lookup.service';

@Component({
  selector: 'shell-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent implements OnInit {
  config!: Microfrontend[];

  constructor(private lookupService: LookupService) {}

  async ngOnInit() {
    this.config = await this.lookupService.lookup();
  }
}
