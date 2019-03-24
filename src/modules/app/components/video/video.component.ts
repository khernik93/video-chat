import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'video-component',
  styleUrls: ['./video.component.scss'],
  templateUrl: './video.component.html'
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
