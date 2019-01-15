import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavOptions } from 'ionic-angular';
import { UserPage } from '../user/user';
import { LoginProvider } from '../../providers/login/login';

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
    LoginProvider
  ]
}) 
export class LoginPage {
 
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loginProvider: LoginProvider
    ) {
      
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  openUserLogin(username: string, password: string){
    this.loginProvider.postLogin(username, password).then((result: any) => {
      console.log(result);
      
      this.navCtrl.push(UserPage.name);
      
    }).catch((error: any) => {
     
      console.log("invalido: " + error.error.erro.codigo);
    });
      
  }



}
