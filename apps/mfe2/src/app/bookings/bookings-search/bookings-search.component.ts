import {
  Component,
  ViewChild,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-bookings-search',
  templateUrl: './bookings-search.component.html',
})
export class BookingsSearchComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(
      (m) => m.LazyComponent
    );

    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer.createComponent(factory, undefined, this.injector);
  }
}
