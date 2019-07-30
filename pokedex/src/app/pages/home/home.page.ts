import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private language: string;

  constructor(private storage: Storage,  private translate: TranslateService) {}

  ngOnInit() {
    this.storage.get('language').then((val) => {
      console.log(val);
      this.language = val;
    });
  }

  changeLanguage(pLanguage: string){
    console.log("Change Language: " + pLanguage);
    this.language = pLanguage;
    this.translate.use(pLanguage);
  }

}
