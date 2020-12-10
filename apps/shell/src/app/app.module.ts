import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
