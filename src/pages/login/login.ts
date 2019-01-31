import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';
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
  ]
})



export class LoginPage {

  buttonDisabled: boolean;
  public checkedBox: boolean;

  public user;

   one: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    private alertCtrl: AlertController,
    private storage: StorageUserProvider) { 
      
    }


  ionViewWillEnter() {
    this.buttonDisabled = true;
    this.retornaUser();
  }
   
  retornaUser(){
      this.storage.getUser().then((result: any) => {
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
      this.storage.save(result);
        if (this.checkedBox){
          this.storage.saveCheck(this.checkedBox);
        } else {
          this.storage.removeCheck();
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



