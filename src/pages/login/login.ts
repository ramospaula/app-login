import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavOptions } from 'ionic-angular';
import { UserPage } from '../user/user';

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
}) 
export class LoginPage {
   
  buttonDisabled: boolean = true;
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.buttonDisabled);
  }
 
  ionViewDidEnter() {
    this.buttonDisabled = true;
  } 

  openUserLogin(){
    this.navCtrl.push(UserPage);
  }

  onChangeTime(username, password){
    if( (password.length >= 4) && (username.length >= 3) ){
      return this.buttonDisabled = false;
    }else{
      return this.buttonDisabled = true; 
    }
  }
  

}
