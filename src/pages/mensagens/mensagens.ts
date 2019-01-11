import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExibirMensagemPage } from '../exibir-mensagem/exibir-mensagem';

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

  public listaMensagem: Array<any> = [];

   mensagem = [
    {
     id : 1,
     nome: "Ana Ramos",
     msg: "Bom dia",
    },
    {
     id: 2,
     nome: "Paula Ramos",
     msg: "Bom tarde",
    }
    ]

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.getListaMensagem();
    console.log('ionViewDidLoad MensagensPage');
  } 
  
  getListaMensagem(){
    this.listaMensagem = this.mensagem;
  }

  openExibirMensagem(item){
    this.navCtrl.push(ExibirMensagemPage,{'id': item});
  }

}
