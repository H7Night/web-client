import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [SharedModule]
})
export class ThemeModule { }
