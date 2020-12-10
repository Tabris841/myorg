import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { FLIGHTS_ROUTES } from './flights.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(FLIGHTS_ROUTES)],
  declarations: [FlightsSearchComponent],
})
export class FlightsModule {}