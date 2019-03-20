/* istanbul ignore file */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DashboardContainer } from './containers/dashboard/dashboard.container';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LayoutContainer } from './containers/layout/layout.container';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './routing/appRouting.module';

export const MODULE_DECLARATIONS = [
  DashboardContainer,
  DashboardComponent
];

const LAYOUT_MODULE_DECLARATIONS = [
  AppComponent,
  LayoutContainer,
  LayoutComponent
];

export const MODULE_IMPORTS = [
  BrowserModule,
  HttpClientModule
];

const ROUTING_MODULE_IMPORTS = [
  AppRoutingModule
];

const STORE_IMPORTS = [];

@NgModule({
  declarations: [
    ...MODULE_DECLARATIONS,
    ...LAYOUT_MODULE_DECLARATIONS
  ],
  imports: [
    ...MODULE_IMPORTS,
    ...ROUTING_MODULE_IMPORTS,
    ...STORE_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {
  constructor() { }
}
