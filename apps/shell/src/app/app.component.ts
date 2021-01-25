import { Component, Inject } from '@angular/core';
import { AuthLibService } from '@tabris84/auth-lib';
import { Microfrontend } from '@myorg/data';
import { RouteBuilderService } from '@myorg/route-lib';
import { APP_CONFIG, AppConfig } from './app.config';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styles: [
    `
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }

      li {
        float: left;
        height: 50px;
        margin-top: auto;
        margin-bottom: auto;
      }

      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        cursor: pointer;
      }

      li a:hover {
        background-color: #111;
      }
    `,
  ],
})
export class AppComponent {
  microfrontends: Microfrontend[] = [];

  constructor(
    private service: AuthLibService,
    private routeBuilderService: RouteBuilderService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  async ngOnInit(): Promise<void> {
    this.service.login('Maxs', 'password');

    this.microfrontends = this.routeBuilderService.microfrontends.filter(
      (o) => o.scope === this.config.moduleScope
    );
  }
}
