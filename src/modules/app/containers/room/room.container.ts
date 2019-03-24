import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { SetRoom } from './store/room.actions';
import { Subject } from 'rxjs';

@Component({
  selector: 'room-container',
  template: `
    <room-component (onJoinRoom)="joinRoom($event)"></room-component>
  `
})
export class RoomContainer {

  private destroy$ = new Subject();

  constructor(
    private store: Store<AppState>
  ) { }

  joinRoom(newRoom: NewRoom) {
    if (!newRoom) return false;
    this.store.dispatch(new SetRoom(newRoom));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
