import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLibComponent } from './auth-lib.component';

@NgModule({
  declarations: [AuthLibComponent],
  imports: [CommonModule],
  exports: [AuthLibComponent],
})
export class AuthLibModule {}
