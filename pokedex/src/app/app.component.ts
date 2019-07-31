import { Component } from '@angular/core';

import { Platform, LoadingController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage,
    private loadingController: LoadingController,
    private events: Events
  ) {
    this.initializeApp();
    let userLang = navigator.language.split('-')[0];
    userLang = /(en|es)/gi.test(userLang) ? userLang : 'en';
    this.translate.use(userLang);
    this.storage.set('language', userLang);

    this.events.subscribe('showLoader', () => {
      this.showLoader();
    });

    this.events.subscribe('hideLoader', () => {
      this.hideLoader();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async showLoader() {
    this.translate.get('COMPONENTS.LOADER.LOADING').subscribe( value => {
      this.loadingController.create({
        message: value
      }).then((res) => {
        res.present();
      });
    });
    
  }
 
  async hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 500);
  }
}
