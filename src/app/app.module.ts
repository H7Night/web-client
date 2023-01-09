import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    SharedModule,
  ],
  //providers: [{ useValue: environment.baseUrl }],
  bootstrap: [AppComponent],
})
export class AppModule { }
