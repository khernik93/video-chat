/* istanbul ignore file */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app',
  styleUrls: [],
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.onRedirectScrollToTop();
  }

  private onRedirectScrollToTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }

}
