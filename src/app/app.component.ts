import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { StorageUserProvider } from '../providers/storage-user/storage-user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  check;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: StorageUserProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.show();
      splashScreen.hide();
      this.retornaUser();
    });
  }
  retornaUser(){
    this.storage.getCheck().then((result: any) => {
      this.check = result;
      console.log(this.check);
      if(this.check == true){
        this.rootPage = UserPage.name;
      } else {
        this.rootPage = LoginPage.name;
      }
    });
}
}
