/* istanbul ignore file */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './routing/appRouting.module';
import { RoomContainer } from './containers/room/room.container';
import { RoomComponent } from './components/room/room.component';
import { syncReducers } from './store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { VideoComponent } from './components/video/video.component';
import { VideoContainer } from './containers/video/video.container';

export const MODULE_DECLARATIONS = [
  DashboardComponent
];

const LAYOUT_MODULE_DECLARATIONS = [
  AppComponent,
  LayoutComponent,
  RoomContainer,
  RoomComponent,
  VideoComponent,
  VideoContainer
];

export const MODULE_IMPORTS = [
  BrowserModule,
  HttpClientModule,
  FormsModule
];

const ROUTING_MODULE_IMPORTS = [
  AppRoutingModule
];

const STORE_IMPORTS = [
  StoreModule.forRoot(syncReducers)
];

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
