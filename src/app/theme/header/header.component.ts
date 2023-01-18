import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent
{
  @HostBinding('class') clas = 'blog-header';
  @Input() showToggle = true;
  @Input() showBranding = false;

  @Output() toggleSideNav = new EventEmitter<void>();
  @Output() toggleSideNavNotice = new EventEmitter<void>();

  toggleFullScreen()
  {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
