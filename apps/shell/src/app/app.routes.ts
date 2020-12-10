import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
