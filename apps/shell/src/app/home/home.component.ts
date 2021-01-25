import { Component, OnInit } from '@angular/core';
import { PluginOptions } from '@myorg/data';

import { LookupService } from '../services/lookup.service';
import { PluginRepositoryService } from '@myorg/route-lib';

@Component({
  selector: 'shell-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 10px;
        position: absolute;
        right: 0;
        top: 40%;
      }

      .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  workflow: PluginOptions[] = [];
  plugins: PluginOptions[] = [];
  showConfig = false;

  constructor(
    private lookupService: LookupService,
    public pluginRepository: PluginRepositoryService
  ) {}

  async ngOnInit(): Promise<void> {
    const plugins = await this.lookupService.fetchPlugins();

    this.pluginRepository.registerPlugins(plugins);
    this.plugins = this.pluginRepository.getPlugins();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}
