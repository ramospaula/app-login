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
import { MensagensPageModule } from '../pages/mensagens/mensagens.module';
import { ExibirMensagemPageModule } from '../pages/exibir-mensagem/exibir-mensagem.module';
import { ExibirPostPageModule } from '../pages/exibir-post/exibir-post.module';
import { ComponentsModule } from '../components/components.module';
import { PostProvider } from '../providers/post/post';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { StorageUserProvider } from '../providers/storage-user/storage-user';

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
    UserPageModule,
    AlterarFotoPageModule,
    MensagensPageModule, 
    ExibirMensagemPageModule,
    ExibirPostPageModule,
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
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    LoginProvider,
    StorageUserProvider
  ]
})
export class AppModule {}
