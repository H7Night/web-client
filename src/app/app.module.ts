import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {ErrorCodeComponent} from './shared/components/error-code/error-code.component';
import {MaterialModule} from './material.module';
import {RoutesRoutingModule} from './routes/routes-routing.module';
import {LoginComponent} from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorCodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RoutesRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
