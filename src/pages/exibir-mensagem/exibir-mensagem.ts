import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-exibir-mensagem',
  templateUrl: 'exibir-mensagem.html',
})
export class ExibirMensagemPage {

  public exibir;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.exibir = this.navParams.get('id');
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad ExibirMensagemPage');
  }



}
