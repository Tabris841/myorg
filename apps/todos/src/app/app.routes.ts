import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
];
