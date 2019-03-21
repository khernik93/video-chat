import { ElementRef } from "@angular/core";

declare global {
  type Players = {
    localVideo: ElementRef, 
    remoteVideo: ElementRef
  }
}
