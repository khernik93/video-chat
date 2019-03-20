/* istanbul ignore file */
import { routerReducer } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { Params } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';

import * as fromRoom from '../containers/room/store/room.reducer';

interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  room: fromRoom.RoomState;
}

export const syncReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  room: fromRoom.roomReducer
};
