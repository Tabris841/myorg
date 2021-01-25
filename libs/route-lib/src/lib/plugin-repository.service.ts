import { Injectable } from '@angular/core';
import { PluginOptions } from '@myorg/data';

@Injectable({ providedIn: 'root' })
export class PluginRepositoryService {
  private plugins: PluginOptions[] = [];

  registerPlugins(plugins: PluginOptions[]) {
    this.plugins = plugins;
  }

  getPlugins(): PluginOptions[] {
    return this.plugins || [];
  }
}
