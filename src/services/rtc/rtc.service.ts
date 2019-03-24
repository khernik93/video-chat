import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import Peer from 'simple-peer';

@Injectable()
export class RtcService {

  getId(initiator: boolean): Observable<any> {
    const peer = new Peer({ initiator });
    return new Observable(observer => {
      peer.on('signal', (data) => {
        observer.next(data);
        observer.complete();
      });
    });
  }

}
