import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { SessionProvider } from '../providers/session/session';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public sessionProvider: SessionProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      statusBar.show();
      splashScreen.hide();
      this.retornaUser();
    });
  }
  retornaUser(){
    this.sessionProvider.getUser().then((result: any) => {
      if(result != null){
        this.rootPage = UserPage.name;
      } else {
        this.rootPage = LoginPage.name;
      }
    });
}
}

