import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit
{
  @Input() nav: string[] = [];

  constructor(private router: Router) { }

  ngOnInit()
  {
    this.nav = Array.isArray(this.nav) ? this.nav : [];

    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }
  }

  trackByNavlink(index: number, navLink: string): string
  {
    return navLink;
  }

  genBreadcrumb()
  {
    const routes = this.router.url.slice(1).split('/');
    //TODO menu
    //this.nav = this.menu.getLevel(routes);
    this.nav.unshift('home');
  }
}
