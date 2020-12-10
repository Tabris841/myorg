import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Microfrontend } from '@myorg/data';

@Injectable({ providedIn: 'root' })
export class LookupService {
  constructor(private http: HttpClient) {}

  lookup(): Promise<Microfrontend[]> {
    return this.http.get<Microfrontend[]>('/api/shell-routes').toPromise();
  }
}
