import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent
{
  @HostBinding('class') class = 'blog-header';
  constructor(private router: Router) { }

  toDashboard()
  {
    this.router.navigate(['blog/dashboard']);
  }

}
