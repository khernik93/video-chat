import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { RoomActionTypes, SetRoomSuccess, SetRoomError } from './room.actions';
import { BackendClient } from '../../../../../services/api/clients/backend/backend.client';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { SocketService } from '../../../../../services/socket/socket.service';
import { RtcService } from '../../../../../services/rtc/rtc.service';

@Injectable()
export class RoomEffects {

  @Effect()
  joinRoom$: Observable<any> = this.actions$
    .pipe(
      ofType(RoomActionTypes.SetRoom),
      exhaustMap((action: any) => this.backendClient.joinRoom(action.newRoom)),
      exhaustMap((room: Room) => {
        return this.rtcService.getId(room.initiator)
          .pipe(
            map((peer: any) => ([ room, peer ]))
          )
      }),
      exhaustMap(([room, peer]) => {
        try {
          this.socketService.send({ ...room, peer });
          return of(new SetRoomSuccess(room));
        } catch (e) {
          return of(new SetRoomError());
        }
      })
    );

  @Effect({
    dispatch: false
  })
  SetRoomSuccess$: Observable<any> = this.actions$
    .pipe(
      ofType(RoomActionTypes.SetRoomSuccess),
      tap(() => {
        this.socketService.listenToPeerChanges()
          .subscribe((peers: any) => {
            console.log(peers);
          });
      })
    )

  constructor(
    private actions$: Actions,
    private backendClient: BackendClient,
    private socketService: SocketService,
    private rtcService: RtcService
  ) { }

}
