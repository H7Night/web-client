import { Component, HostBinding, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  @HostBinding('class') class = 'blog-header';
}
