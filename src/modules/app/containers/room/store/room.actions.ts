import { Action } from '@ngrx/store';

export enum RoomActionTypes {
  SetRoom = '[Room] Set room',
  SetInCall = '[Room] Set inCall'
}

export class SetRoom implements Action {
  readonly type = RoomActionTypes.SetRoom;
  constructor(public room: Room) { }
}

export class SetInCall implements Action {
  readonly type = RoomActionTypes.SetInCall;
  constructor(public inCall: boolean) { }
}

export type RoomActions = SetRoom | SetInCall;
