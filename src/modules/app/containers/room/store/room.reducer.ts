import { RoomActions, RoomActionTypes } from './room.actions';

export interface RoomState {
  current: number;
  inCall: boolean;
}

export const initialState: RoomState = {
  current: null,
  inCall: false
};

export function roomReducer(state = initialState, action: RoomActions): RoomState {
  switch (action.type) {
    case RoomActionTypes.SetRoom: {
      return { ...state, current: action.room };
    }
    case RoomActionTypes.SetInCall: {
      return { ...state, inCall: action.inCall };
    }
    default: {
      return state;
    }
  }
}
