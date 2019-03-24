import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import redisClient from "../clients/redis.client";
import { Peer, PeersMap } from "../models/peers";
import Repository from "./repository";

class PeersRepository implements Repository {

  key = 'peers';

  getAll(): Observable<PeersMap> {
    return redisClient.get(this.key);
  }

  insertByRoomId(roomId: number, peer: Peer): Observable<void> {
      return this.getAll()
        .pipe(
          map((peersMap: PeersMap) => {
            let newPeersByRoomId: Peer[] = peersMap.get(roomId);
            if (newPeersByRoomId) {
              newPeersByRoomId.push(peer);
            } else {
              newPeersByRoomId = [peer];
            }
            redisClient.set(this.key, newPeersByRoomId);
          })
        );
  }

}

export default new PeersRepository();
