import { Component } from '@angular/core';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentImage: any;
  constructor(public photoService: CameraService) {  }
  ngOnInit() {
    this.photoService.loadSaved();
  }
}