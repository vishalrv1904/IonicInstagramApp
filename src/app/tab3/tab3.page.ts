import { Component } from '@angular/core';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public photoService: CameraService) { }

}

