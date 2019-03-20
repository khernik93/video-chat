import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { SetRoom } from './store/room.actions';

@Component({
  selector: 'room-container',
  template: `
    <room-component (onChangeRoom)="changeRoom($event)"></room-component>
  `
})
export class RoomContainer { 

  constructor(
    private store: Store<AppState>
  ) { }

  changeRoom(room) {
    this.store.dispatch(new SetRoom(room));
  }

}
