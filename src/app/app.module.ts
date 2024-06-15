import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { RoutesRoutingModule } from './routes/routes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RoutesModule,
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
