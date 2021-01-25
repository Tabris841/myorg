import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from '@myorg/data';

@Component({
  selector: 'shell-plugin-proxy',
  template: ` <ng-container #placeHolder></ng-container> `,
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @Input()
  options!: PluginOptions;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  async ngOnChanges() {
    this.viewContainer.clear();

    const component = await loadRemoteModule(this.options).then(
      (m) => m[this.options.componentName]
    );

    const factory = this.cfr.resolveComponentFactory(component);

    this.viewContainer.createComponent(factory, undefined, this.injector);
  }
}
