import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import screenfull from 'screenfull';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @HostBinding('class') clas = 'blog-header';
  @Input() showToggle = true;
  @Input() showBranding = false;

  @Output() toggleSideNav = new EventEmitter<void>();
  @Output() toggleSideNavNotice = new EventEmitter<void>();
  constructor(private router: Router) {}

  toggleFullScreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
  toHome() {
    this.router.navigate(['blog/home']);
  }
  toBlog() {
    this.router.navigate(['blog/blog']);
  }
  toArchive() {
    this.router.navigate(['blog/archive']);
  }
  toAbout() {
    this.router.navigate(['blog/about']);
  }
  changeMode() {

  }
}
