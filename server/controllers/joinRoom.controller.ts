import { switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import Controller from './controller';
import { Room } from '../models/room';
import roomRepository from '../repositories/room.repository';
import numberService from '../services/number.service';

export class JoinRoomController extends Controller {

  handler(req, res) {
    const room: Room = req.body;
    roomRepository.getAll()
      .pipe(
        switchMap((allRooms: Room[]) => {
          return (!room.id) ?
            this.createNewRoom(room, allRooms) :
            this.joinExistingRoom(room, allRooms);
        }),
        catchError(err => (
          this.sendErrorResponse(err, res)
        ))
      )
      .subscribe((newRoom: Room) => (
        this.sendSuccessResponse(newRoom, res)
      ));
  }

  /**
   * Create new room ID and add room to the store
   * @param room 
   * @param allRooms 
   */
  private createNewRoom(room: Room, allRooms: Room[]): Observable<Room> {
    const allRoomIds = allRooms.map(e => e.id);
    const newId = this.generateUniqueId(allRoomIds);
    return roomRepository.insert({ ...room, id: newId });
  }

  /**
   * Generate new unique ID
   * @param allRoomIds 
   */
  private generateUniqueId(allRoomIds: number[]): number {
    let newId;
    while (true) {
      newId = numberService.getRandomNumber();
      if (allRoomIds.indexOf(newId) <= -1) {
        break;
      }
    }
    return newId;
  }

  /**
   * Check if room is valid and returns it if yes, or throws an error
   * @param room 
   * @param allRooms 
   */
  private joinExistingRoom(room: Room, allRooms: Room[]): Observable<Room> {
    const matchedRoom = allRooms.filter(e => e.id === room.id && e.key === e.key)[0];
    if (! matchedRoom) {
      throw "No such room found, or the key is invalid";
    }
    return of(matchedRoom);
  }

}
