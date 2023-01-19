import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class ThemeModule { }
