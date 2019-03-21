import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable()
export class VideoService {

  /**
   * getUserMedia() call
   * @returns getUserMedia as a stream
   * @throws Error in case of not supported getUserMedia() function
   */
  getUserMedia(): Observable<any> {
    if (! this.hasGetUserMedia) {
      throw "getUserMedia() is not supported by your browser";
    }
    return from(navigator.mediaDevices.getUserMedia({video: true, audio: false}));
  }

  /**
   * Check if getUserMedia function is supported by current browser
   * @returns boolean
   */
  private hasGetUserMedia(): boolean {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }

}
