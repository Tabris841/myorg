import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  template: `
    <div class="task">
      <img
        src="http://localhost:3000/assets/download.png"
        style="width: 240px; height: 193px"
      />
      <p>Download</p>
    </div>
  `,
})
export class DownloadComponent {}
