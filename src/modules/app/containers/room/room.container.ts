import { Component, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { SetRoom } from './store/room.actions';
import { BackendClient } from '../../../../services/api/clients/backend/backend.client';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'room-container',
  template: `
    <room-component (onJoinRoom)="joinRoom($event)"
                    (onCreateRoom)="createRoom($event)"
    ></room-component>
  `
})
export class RoomContainer {

  private destroy$ = new Subject();

  constructor(
    private store: Store<AppState>,
    private backendClient: BackendClient
  ) { }

  joinRoom(newRoom: NewRoom) {
    if (!newRoom) return false;
    this.backendClient.joinRoom(newRoom)
      .pipe(takeUntil(this.destroy$))
      .subscribe((room: Room) => {
        this.setRoom(room);
      });
  }

  createRoom(newRoom: NewRoom) {
    if (!newRoom) return false;
    this.backendClient.createRoom(newRoom)
      .pipe(takeUntil(this.destroy$))
      .subscribe((room: Room) => {
        this.setRoom(room);
      });
  }

  private setRoom(room) {
    this.store.dispatch(new SetRoom(room));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
