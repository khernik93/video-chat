import { Component, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil, take } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AppState } from '../../store/app.reducers';
import { selectRoom, selectInCall } from '../room/store/room.selectors';
import { SetInCall } from '../room/store/room.actions';
import { VideoService } from '../../../../services/video/video.service';

@Component({
  selector: 'video-container',
  template: `
    <video-component [room$]="room$"
                     [inCall$]="inCall$"
                     [(localVideoRef)]="localVideoRef"
                     [(remoteVideoRef)]="remoteVideoRef"
                     (onCall)="onCall()"
                     (onEndCall)="onEndCall()"
    ></video-component>
  `
})
export class VideoContainer { 

  room$: Observable<Room>;
  inCall$: Observable<boolean>;
  localVideoRef: ElementRef;
  remoteVideoRef: ElementRef;

  private destroy$ = new Subject();

  constructor(
    private store: Store<AppState>,
    private videoService: VideoService
  ) { 
    this.room$ = this.store.select(selectRoom);
    this.inCall$ = this.store.select(selectInCall);
  }

  onCall() {
    this.store.dispatch(new SetInCall(true));
    this.createLocalVideo();
  }

  private createLocalVideo() {
    this.videoService.getUserMedia()
      .pipe(takeUntil(this.destroy$))
      .subscribe(userMedia => this.playLocalVideo(userMedia));
  }

  private playLocalVideo(userMedia: any) {
    this.localVideoRef.nativeElement.srcObject = userMedia;
    this.localVideoRef.nativeElement.play();
  }

  onEndCall() {
    this.store.dispatch(new SetInCall(false));
    this.stopLocalVideo();
  }

  private stopLocalVideo() {
    this.localVideoRef.nativeElement.pause();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
