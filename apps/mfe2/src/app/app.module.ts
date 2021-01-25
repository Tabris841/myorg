import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingsModule } from './bookings/bookings.module';
import { APP_ROUTES } from './app.routes';
import { AnalyzeComponent } from './analyze/analyze.component';
import { EnrichComponent } from './enrich/enrich.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalyzeComponent,
    EnrichComponent,
  ],
  imports: [BrowserModule, BookingsModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
