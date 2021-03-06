import { Component } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'myorg-auth-lib',
  template: ` <p>Hi User: {{ user }}!</p> `,
})
export class AuthLibComponent {
  user = this.service.user;

  constructor(private service: AuthLibService) {}
}
