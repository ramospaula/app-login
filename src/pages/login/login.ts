import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavOptions } from 'ionic-angular';
import { UserPage } from '../user/user';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';
import { StorageUserProvider } from '../../providers/storage-user/storage-user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginProvider,
    StorageUserProvider
  ]
})  



export class LoginPage {
   
  private open: boolean = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    private alertCtrl: AlertController,
    private storageUser: StorageUserProvider
    ) {
      
  }
  

  ionViewDidEnter() {
    
    console.log('ionViewDidLoad LoginPage');
  }

  
  openUserLogin(username: string, password: string){
    this.loginProvider.postLogin(username, password).then((result: any) => {
      console.log(result);
      this.storageUser.save(result); 
      this.storageUser.getUser();
      this.navCtrl.setRoot(UserPage.name);
      this.open = false;
    }).catch((error: any) => {
      const alert = this.alertCtrl.create({
        title: 'codigo ' + error.error.erro.codigo,
        subTitle: 'usuário ou senha inválido',
        buttons: ['OK']
      });
      alert.present();
      console.log("invalido: " + error.error.erro.codigo);
    });
      
  }

  

  
}

  
  


