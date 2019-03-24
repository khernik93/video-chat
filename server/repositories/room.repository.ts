import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import redisClient from "../clients/redis.client";
import { Room } from "../models/room";
import Reporitory from "./repository";

class RoomRepository implements Reporitory {

  key = 'rooms';

  getAll(): Observable<Room[]> {
    return redisClient.get(this.key)
      .pipe(
        map((rooms: Room[]) => rooms || [])
      );
  }

  insert(room: Room): Observable<Room> {
    return this.getAll()
      .pipe(
        map((rooms: Room[]) => {
          rooms.push(room);
          redisClient.set(this.key, rooms);
          return room;
        })
      );
  }

}

export default new RoomRepository();
