import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { DownloadComponent } from './download/download.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    DownloadComponent,
    UploadComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
