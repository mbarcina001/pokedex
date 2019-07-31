import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.page.html',
  styleUrls: ['./error-modal.page.scss'],
})
export class ErrorModalPage {

  constructor(private events: Events) { }

  closeModal(){
    this.events.publish('hideErrorModal');
  }

}
