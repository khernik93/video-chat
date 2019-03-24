import { Injectable } from '@angular/core';
import socketIo from 'socket.io-client';
import { Message } from './models/message.model';
import { Observable, from } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

const SERVER_URL = 'http://127.0.0.1:3011';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private static socket: any = null;

  constructor() {
    if (SocketService.socket === null) {
      SocketService.socket = socketIo(SERVER_URL);
    }
  }

  public send(message: any): void {
    SocketService.socket.emit('message', message);
  }

  public listenToPeerChanges() {
    return new Observable<any>(observer => {
      SocketService.socket.on('peers', (data: any) => observer.next(data));
    });
  }

  /*
  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
  */

}
