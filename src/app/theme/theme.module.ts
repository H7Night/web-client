import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarNoticeComponent } from './sidebar-notice/sidebar-notice.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SidebarNoticeComponent,
  ],
  imports: [SharedModule]
})
export class ThemeModule { }
