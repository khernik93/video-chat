import { Action } from '@ngrx/store';

export enum RoomActionTypes {
  SetRoom = '[Room] Set room',
  SetRoomSuccess = '[Room] Set room success',
  SetRoomError = '[Room] Set room error',
  SetInCall = '[Room] Set inCall'
}

export class SetRoom implements Action {
  readonly type = RoomActionTypes.SetRoom;
  constructor(public newRoom: NewRoom) { }
}

export class SetRoomSuccess implements Action {
  readonly type = RoomActionTypes.SetRoomSuccess;
  constructor(public room: Room) { }
}

export class SetRoomError implements Action {
  readonly type = RoomActionTypes.SetRoomError;
  constructor() { }
}

export class SetInCall implements Action {
  readonly type = RoomActionTypes.SetInCall;
  constructor(public inCall: boolean) { }
}

export type RoomActions = SetRoom | 
  SetInCall |
  SetRoomSuccess |
  SetRoomError;
