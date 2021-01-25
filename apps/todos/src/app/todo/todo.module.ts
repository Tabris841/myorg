import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UiModule } from '@myorg/ui';

import { TodoComponent } from './todo.component';
import { TODO_ROUTES } from './todo.routes';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(TODO_ROUTES),
    UiModule,
  ],
})
export class TodoModule {}
