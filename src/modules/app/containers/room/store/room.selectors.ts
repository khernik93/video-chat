import { createSelector } from '@ngrx/store';

import { selectApp } from '../../../store/app.selectors';
import { AppState } from '../../../store/app.reducers';

export const selectRoom = createSelector(
  selectApp,
  (state: AppState) => state.room.current
);
