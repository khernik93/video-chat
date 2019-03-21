/* istanbul ignore file */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { VideoService } from '../../services/video/video.service';
import { SocketService } from '../../services/socket/socket.service';
import { CreateRoomFormModalComponent } from './components/room/components/createRoomFormModal/createRoomFormModal.component';
import { BackendClient } from '../../services/api/clients/backend/backend.client';
import { BackendService } from '../../services/api/clients/backend/backend.service';
import { TransferHttpService } from '../../services/api/transferHttp.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const MODULE_DECLARATIONS = [
  DashboardComponent,
  RoomContainer,
  RoomComponent,
  VideoComponent,
  VideoContainer,
  CreateRoomFormModalComponent
];

const LAYOUT_MODULE_DECLARATIONS = [
  AppComponent,
  LayoutComponent
];

export const MODULE_IMPORTS = [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModule.forRoot()
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
  providers: [
    VideoService, 
    SocketService,
    BackendClient,
    BackendService,
    TransferHttpService
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  entryComponents: [CreateRoomFormModalComponent]
})
export class AppModule {
  constructor() { }
}
