import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { Observable } from 'rxjs';
import { selectRoom } from '../room/store/room.selectors';

@Component({
  selector: 'video-container',
  template: `
    <video-component [room$]="room$"></video-component>
  `
})
export class VideoContainer { 

  room$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) { 
    this.room$ = this.store.select(selectRoom);
  }

}
