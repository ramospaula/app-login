import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { CameraPage } from '../pages/camera/camera';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ComponentsModule } from '../components/components.module';
import { PostProvider } from '../providers/post/post';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { StorageUserProvider } from '../providers/storage-user/storage-user';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeptBr from '@angular/common/locales/pt'

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
    LoginPageModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
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
    StorageUserProvider
  ]
})
export class AppModule {}
