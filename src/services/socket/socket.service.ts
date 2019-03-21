import { Injectable } from '@angular/core';
import socketIo from 'socket.io-client';
import { Message } from './models/message.model';

const SERVER_URL = 'http://127.0.0.1:3011';

@Injectable()
export class SocketService {

  private socket: any;

  initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
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
