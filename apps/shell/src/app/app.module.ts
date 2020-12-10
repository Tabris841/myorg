import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ConfigComponent],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
