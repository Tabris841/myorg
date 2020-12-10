import { Routes } from '@angular/router';
import { BookingsSearchComponent } from './bookings-search/bookings-search.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bookings-search',
  },
  {
    path: 'bookings-search',
    component: BookingsSearchComponent,
  },
];
