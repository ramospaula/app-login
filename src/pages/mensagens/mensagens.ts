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
     nome: "Ana Ramos",
     msg: "Bom dia",
    },
    {
     nome: "Paula Ramos",
     msg: "Bom tarde",
    },
    {
      nome: "Maria Santos",
      msg: "Como está voce?",
     },{
      nome: "Roberta Gonçalves",
      msg: "Parabéns",
     },
     {
      nome: "Joana Silva",
      msg: "Amanhã a gente se ver"
     },
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
