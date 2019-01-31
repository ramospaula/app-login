import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavOptions } from 'ionic-angular';
import { UserPage } from '../user/user';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SessionProvider } from '../../providers/session/session';


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
  ]
})



export class LoginPage {

  buttonDisabled: boolean;
  public checkedBox: boolean;

  public user;
   name: string;
   senha: string;
   key: string = 'username';
   key1: string = 'password';
   key2: string = 'checked';
   one: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    private alertCtrl: AlertController,
    private storage: Storage, private sessionProvider:SessionProvider) { 
      
    }


    


  ionViewWillEnter() {
    this.buttonDisabled = true;
    this.retornaUser();
  }
   
  retornaUser(){
      this.sessionProvider.getUser().then((result: any) => {
        this.one = result;
        console.log(result);
      });
  }

  
  

  onChangeTime(username, password) {
    if ((password.length >= 4) && (username.length >= 3)) {
      return this.buttonDisabled = false;
    } else {
      return this.buttonDisabled = true;
    }
  }

  openUserLogin(username: string, password: string) {
    this.loginProvider.postLogin(username, password).then((result: any) => {
      console.log(result);
      this.navCtrl.setRoot(UserPage.name, { 'user': result });
      this.sessionProvider.setUser(result);
        if (this.checkedBox){
          this.sessionProvider.saveCheck(this.checkedBox);
        } else {
          this.sessionProvider.removeCheck();
        }
      
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



