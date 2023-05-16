import { Component, HostBinding,  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  //TODO: 作用是什么 encapsulation: ViewEncapsulation.None, ViewEncapsulation
})
export class DashboardComponent {
  @HostBinding('class') class = 'blog-header';
  constructor(private router: Router) {}

  toHome() {
    this.router.navigate(['blog/home']);
  }
}
