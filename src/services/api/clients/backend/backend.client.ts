import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { Client } from '../client';
import { BackendService } from './backend.service';
import { TransferHttpService } from '../../transferHttp.service';

@Injectable()
export class BackendClient {

  private client: Client;

  constructor(
    private backendService: BackendService,
    private transferHttpService: TransferHttpService
  ) {
    this.client = new Client(
      this.backendService,
      this.transferHttpService
    );
  }

  createRoom(newRoom: NewRoom): Observable<Room> {
    return this.client.sendPostRequest({
      uri: this.client.routes.createRoom,
      payload: newRoom
    });
  }

  joinRoom(newRoom: NewRoom): Observable<Room> {
    return this.client.sendPostRequest({
      uri: this.client.routes.joinRoom,
      payload: newRoom
    });
  }

}
