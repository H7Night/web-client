import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    // RouterModule,
  ],
  // providers: [{
  //   useValue: environment.baseUrl
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
