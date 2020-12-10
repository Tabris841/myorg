import {
  Component,
  ViewChild,
  ViewContainerRef,
  Inject,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';

import { AuthLibService } from '@myorg/auth-lib';

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
export class FlightsSearchComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  user = this.service.user;

  constructor(
    private service: AuthLibService,
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr
  ) {}

  search() {
    alert('Not implemented for this demo!');
  }

  terms() {
    import('../lazy/lazy.component')
      .then((m) => m.LazyComponent)
      .then((comp) => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, null, this.injector);
      });
  }
}
