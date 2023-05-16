import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { LayoutComponent } from '../theme/layout/layout.component';
import { AboutComponent } from './Page/about/about.component';
import { BlogComponent } from './Page/blog/blog.component';
import { ArchiveComponent } from './Page/archive/archive.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'blog',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: '404' },
    ],
  },
  { path: '403', component: Error403Component },
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule { }
