import { RoomActions, RoomActionTypes } from './room.actions';

export interface RoomState {
  room: Room;
  inCall: boolean;
}

export const initialState: RoomState = {
  room: null,
  inCall: false
};

export function roomReducer(state = initialState, action: RoomActions): RoomState {
  switch (action.type) {
    case RoomActionTypes.SetRoom: {
      return { ...state, room: action.room };
    }
    case RoomActionTypes.SetInCall: {
      return { ...state, inCall: action.inCall };
    }
    default: {
      return state;
    }
  }
}
