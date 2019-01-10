import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html',
})
export class MensagensPage {

  private listaMensagem: Array<any> = [];

   
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.listaMensagem = [
      {
       nome: "Ana Ramos",
       mensagem: "Bom dia",
      },
      {
       nome: "Paula Ramos",
       mensagem: "Bom tarde",
      }
      ]
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagensPage');
  }
  
  

}
