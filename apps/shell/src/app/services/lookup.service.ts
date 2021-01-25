import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Microfrontend, PluginOptions } from '@myorg/data';

@Injectable({ providedIn: 'root' })
export class LookupService {
  constructor(private http: HttpClient) {}

  fetchModules(): Promise<Microfrontend[]> {
    return this.http.get<Microfrontend[]>('/api/modules').toPromise();
  }

  fetchPlugins(): Promise<PluginOptions[]> {
    return this.http.get<PluginOptions[]>('/api/plugins').toPromise();
  }
}
