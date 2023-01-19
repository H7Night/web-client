// import { Directionality } from '@angular/cdk/bidi';
// import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
// import { DOCUMENT } from '@angular/common';
// import { Component, HostBinding, Inject, OnDestroy, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
// import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { SettingsService } from 'src/app/core/bootstrap/settings.service';
// import { AppDirectionality } from 'src/app/shared';

// const MOBILE_MEDIAQUERY = 'screen and (max-width:599px)';
// const TABLET_MEDIAQUERY = 'screen and (min-width:600px) and (max-width:959px)';
// const MONITOR_MEDIAQUERY = 'screen and (min-width:960px)';

// @Component({
//   selector: 'app-layout',
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.less'],
//   encapsulation: ViewEncapsulation.None,
// })
// export class LayoutComponent implements OnDestroy
// {
//   @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
//   @ViewChild('content', { static: true }) content!: MatSidenavContent;

//   options = this.settings.getOptions();

//   private layoutChangesSubscription = Subscription.EMPTY;
//   private isMobileScreen = false;
//   private layoutChangeSubscription = Subscription.EMPTY;
//   private isContentWidthFixed = true;
//   private isCollapsedWidthFixed = false;
//   private htmlElement !: HTMLHtmlElement;

//   constructor(
//     private router: Router,
//     private mediaMatcher: MediaMatcher,
//     private breakpointObserver: BreakpointObserver,
//     private settings: SettingsService,
//     @Optional() @Inject(DOCUMENT) private document: Document,
//     @Inject(Directionality) public dir: AppDirectionality
//   )
//   {
//     this.dir.value = this.options.dir;
//     this.document.body.dir = this.dir.value;

//     this.htmlElement = this.document.querySelector('html')!;
//     this.layoutChangesSubscription = this.breakpointObserver
//       .observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY])
//       .subscribe(state =>
//       {
//         this.options.sidenavOpened = true;
//         this.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
//         this.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
//         this.isContentWidthFixed = state.breakpoints[MONITOR_MEDIAQUERY];
//       });
//     this.
//   }

//   ngOnDestroy()
//   {
//     this.layoutChangeSubscription.unsubscribe();
//   }
//   get isOver(): boolean
//   {
//     return this.isMobileScreen;
//   }
// }
