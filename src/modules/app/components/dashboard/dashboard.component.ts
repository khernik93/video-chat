import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="left-pane">
      <div class="header">Options</div>
      <room-container></room-container>
    </div>
    <div class="right-pane">
      <div class="header">Video</div>
      <video-container></video-container>
    </div>
  `
})
export class DashboardComponent {

  constructor() { }

}
