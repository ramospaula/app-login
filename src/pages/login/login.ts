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
   
  buttonDisabled: boolean;
  public checkedBox: boolean;

  public user;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    private alertCtrl: AlertController,
    private storageUser: StorageUserProvider
    ) {
      
  }
 
  ionViewDidEnter() {
    this.buttonDisabled = true;
    this.checkedBox = false;
  } 


  onChangeTime(username, password){
    if( (password.length >= 4) && (username.length >= 3) ){
      return this.buttonDisabled = false;
    }else{
      return this.buttonDisabled = true; 
    }
  }
  
  openUserLogin(username: string, password: string){
    this.loginProvider.postLogin(username, password).then((result: any) => {
      console.log(result);
      this.storageUser.save(result);
      this.navCtrl.setRoot(UserPage.name);
    }).catch((error: any) => {
      const alert = this.alertCtrl.create({
        title: 'codigo ' + error.error.erro.codigo,
        subTitle: error.error.erro.mensagem,
        buttons: ['OK']
      });
      alert.present();
    });
      
  }
  
  
}
  


