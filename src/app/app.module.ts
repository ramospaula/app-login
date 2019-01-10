import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { UserPageModule } from '../pages/user/user.module';
import { CameraPage } from '../pages/camera/camera';
import { GaleriaPage } from '../pages/galeria/galeria';
import { AlterarFotoPageModule } from '../pages/alterar-foto/alterar-foto.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraPage,
    GaleriaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    UserPageModule,
    AlterarFotoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    CameraPage,
    GaleriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
