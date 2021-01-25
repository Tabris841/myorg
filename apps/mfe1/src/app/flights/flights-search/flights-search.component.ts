import {
  Component,
  ViewChild,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import { AuthLibService } from '@tabris84/auth-lib';
import { RouteBuilderService } from '@myorg/route-lib';
import { Microfrontend } from '@myorg/data';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styles: [
    `
      input[type='text'] {
        width: 100%;
        max-width: 400px;
        box-sizing: border-box;
        border: none;
        border-bottom: 2px solid silver;
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
      }

      button {
        border: 2px solid silver;
        background-color: white;
        font-size: 16px;
        padding: 10px;
        padding-left: 40px;
        padding-right: 40px;
        border-radius: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
        cursor: pointer;
      }

      button:active {
        border-color: black;
      }

      #container {
        border: 2px darkred dashed;
        padding: 20px;
      }
    `,
  ],
})
export class FlightsSearchComponent implements OnInit {
  private readonly moduleScope = 'Flights';

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  user = this.service.user;
  microfrontends: Microfrontend[] = [];

  constructor(
    private service: AuthLibService,
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
    private routeBuilderService: RouteBuilderService
  ) {}

  ngOnInit(): void {
    this.microfrontends = this.routeBuilderService.microfrontends.filter(
      (o) => o.scope === this.moduleScope
    );
  }
  search() {
    alert('Not implemented for this demo!');
  }

  terms() {
    import('../lazy/lazy.component')
      .then((m) => m.LazyComponent)
      .then((comp) => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, undefined, this.injector);
      });
  }
}
