import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';

/**
 * Generated class for the ExibirMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibir-mensagem',
  templateUrl: 'exibir-mensagem.html',
})
export class ExibirMensagemPage {

  public exibir;
  public mensagemP: MensagensPage;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.exibir = this.navParams.get('id');
  }

  ionViewDidLoad() { 
    
    console.log('ionViewDidLoad ExibirMensagemPage');
  }



}
