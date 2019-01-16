import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExibirMensagemPage } from '../exibir-mensagem/exibir-mensagem';
import { PostProvider } from '../../providers/post/post';
import { StorageUserProvider } from '../../providers/storage-user/storage-user';

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

  

  public message:any = new Array;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private messagePost: PostProvider, private storageUser: StorageUserProvider) {
    
    this.storageUser.getUser().then(result => {
      this.messagePost.getMessageList(result.id).subscribe(
        data => {
          this.message = data;
          console.log(data);
        }, error => {
          console.log(error);
        }
      )
      console.log(result.id);
      console.log(this.message);
      });
  }

  ionViewDidLoad() {
    /* this.getListaMensagem(); */
    console.log('ionViewDidLoad MensagensPage');
  } 
  
 /*  getListaMensagem(){
    this.listaMensagem = this.mensagem;
  } */

  openExibirMensagem(item){
    this.navCtrl.push(ExibirMensagemPage,{'id': item});
  }

}
