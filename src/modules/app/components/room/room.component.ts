import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'room-component',
  styleUrls: ['./room.component.scss'],
  template: `
    <input class="form-control" type="text" [(ngModel)]="room">
    <button class="btn btn-primary" (click)="changeRoom()">Change room</button>
  `
})
export class RoomComponent { 

  @Output() onChangeRoom = new EventEmitter<number>();

  room: string;

  changeRoom() {
    this.onChangeRoom.emit(+this.room);
  }

}
