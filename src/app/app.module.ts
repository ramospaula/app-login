import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { CameraPage } from '../pages/camera/camera';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ComponentsModule } from '../components/components.module';
import { PostProvider } from '../providers/post/post';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeptBr from '@angular/common/locales/pt'
import { SessionProvider } from '../providers/session/session';
import { UserPage } from '../pages/user/user';


registerLocaleData(localeptBr);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraPage,
    GaleriaPage
  ],
  imports: [
    ComponentsModule, 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    CameraPage,
    GaleriaPage
  ],
  providers: [
    DatePipe,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    LoginProvider,
    SessionProvider,
  ]
})
export class AppModule {}
