import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public push: Push,
              alertCtrl: AlertController ) {

    this.push.rx.notification()
      .subscribe((msg) => {
        // alert(msg.title + ': ' + msg.text);
        let alert = alertCtrl.create({
          title: msg.title,
          message: msg.text,
          buttons: ['Dismiss']
        });
        alert.present();
      });

  }

}
