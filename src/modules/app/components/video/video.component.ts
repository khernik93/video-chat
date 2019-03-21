import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'video-component',
  styleUrls: ['./video.component.scss'],
  template: `
    <div class="container" *ngIf="(room$ | async) as room; else noroom">
      <h3>Room nr. <b>{{ room$ | async }}</b></h3>
      <div class="controls">
        <button id="call" class="btn btn-success" (click)="call()" [disabled]="(inCall$ | async)">Call</button>
        <button id="end" class="btn btn-danger" (click)="endCall()" [disabled]="!(inCall$ | async)">End call</button>
      </div>
      <div class="player">
        <h2>local</h2>
        <video id="local_video" width="680px" style="border: 1px solid black;" #localVideo></video>
        <h2>remote</h2>
        <video id="remote_video" width="680px" style="border: 1px solid black;" #remoteVideo></video>
      </div>
    </div>
    <ng-template #noroom>
      <div class="no-content">
        No room was selected!
      </div>
    </ng-template>
  `
})
export class VideoComponent implements AfterViewChecked { 

  @Input() inCall$: Observable<string>;
  @Input() room$: Observable<number>;
  @Input() localVideoRef: ElementRef;
  @Input() remoteVideoRef: ElementRef;

  @Output() onCall = new EventEmitter<void>();
  @Output() onEndCall = new EventEmitter<void>();
  @Output() localVideoRefChange = new EventEmitter<ElementRef>();
  @Output() remoteVideoRefChange = new EventEmitter<ElementRef>();

  @ViewChild('localVideo') localVideo: ElementRef;
  @ViewChild('remoteVideo') remoteVideo: ElementRef;

  ngAfterViewChecked() {
    this.localVideoRefChange.emit(this.localVideo);
    this.remoteVideoRefChange.emit(this.remoteVideo);
  }

  call() {
    this.onCall.emit();
  }

  endCall() {
    this.onEndCall.emit();
  }

}
