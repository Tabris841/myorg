import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  template: `
    <div class="task">
      <img
        src="http://localhost:3000/assets/upload.png"
        style="width: 240px; height: 193px"
      />
      <p>Upload</p>
    </div>
  `,
})
export class UploadComponent {}
