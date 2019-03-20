import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'video-component',
  template: `
    {{ room$ | async }}
  `
})
export class VideoComponent { 

  @Input() room$: Observable<number>;

}
