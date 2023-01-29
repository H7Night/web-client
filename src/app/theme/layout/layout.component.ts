import { Directionality } from '@angular/cdk/bidi';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnDestroy,
  Optional,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { SettingsService } from 'src/app/core/bootstrap/settings.service';
import { AppSettings } from 'src/app/core/settings';
import { AppDirectionality } from 'src/app/shared';

const MOBILE_MEDIAQUERY = 'screen and (max-width:599px)';
const TABLET_MEDIAQUERY = 'screen and (min-width:600px) and (max-width:959px)';
const MONITOR_MEDIAQUERY = 'screen and (min-width:960px)';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  @ViewChild('content', { static: true }) content!: MatSidenavContent;

  options = this.settings.getOptions();

  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private layoutChangeSubscription = Subscription.EMPTY;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  @HostBinding('') get contentWidthFix() {
    return this.isContentWidthFixed &&
      this.options.navPos === 'side' &&
      this.options.sidenavOpened &&
      !this.isOver;
  };

  @HostBinding('') get collapsedWidthFIx()
  {
    return (
      this.isCollapsedWidthFixed &&
      (this.options.navPos === 'top' || (this.options.sidenavOpened && this.isOver))
    );
}

  constructor(
    private router: Router,
    private mediaMatcher: MediaMatcher,
    private breakpointObserver: BreakpointObserver,
    private settings: SettingsService,
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Inject(Directionality) public dir: AppDirectionality
  ) {
    this.dir.value = this.options.dir;
    this.document.body.dir = this.dir.value;

    this.htmlElement = this.document.querySelector('html')!;
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY])
      .subscribe((state) => {
        this.options.sidenavOpened = true;
        this.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
        this.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
        this.isContentWidthFixed = state.breakpoints[MONITOR_MEDIAQUERY];
      });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        if (this.isOver) {
          this.sidenav.close();
        }
        this.content.scrollTo({ top: 0 });
      });
    if (this.options.theme === 'auto') {
      this.setAutoTheme();
    }
    this.receiveOptions(this.options);
  }

  ngOnDestroy() {
    this.layoutChangeSubscription.unsubscribe();
  }
  get isOver(): boolean {
    return this.isMobileScreen;
  }
  toggleCollapsed() {
    this.isContentWidthFixed = false;
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }
  resetCollapsedState(timer = 400) {
    setTimeout(() => this.settings.setOptions(this.options), timer);
  }
  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
    this.options.sidenavOpened = !isOpened;
    this.settings.setOptions(this.options);
  }
  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  setAutoTheme() {
    if (
      this.mediaMatcher.matchMedia('(prefers-colr-scheme)').media !== 'not all'
    ) {
      const isSystemDark = this.mediaMatcher.matchMedia(
        '(prefers-color-scheme: dark).matches'
      );
      this.options.theme = isSystemDark ? 'dark' : 'light';
    } else {
      this.options.theme = 'light';
    }
  }
  receiveOptions(options: AppSettings): void {
    this.options = options;
    this.toggleDarkTheme(options);
    this.toggleDirection(options);
  }
  toggleDarkTheme(options: AppSettings) {
    if (options.theme === 'dark') {
      this.htmlElement.classList.add('theme-dark');
    } else {
      this.htmlElement.classList.remove('theme-dark');
    }
  }
  toggleDirection(options: AppSettings) {
    this.dir.value = options.dir;
    this.document.body.dir = this.dir.value;
  }
}
