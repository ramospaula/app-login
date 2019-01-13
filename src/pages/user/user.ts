import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { PostsPage } from '../posts/posts';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ExibirPostPage } from '../exibir-post/exibir-post';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
public posts;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.posts = 
      {
       tituloPost: "A linguagem",
       autor: "admin",
       dataPublicacao: "08/01/2019",
       horario: "12:50",
       post: "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável",
      }
      
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  openMensagens(): any{
    this.navCtrl.push(MensagensPage);
  }

  openPosts(){
    this.navCtrl.push(PostsPage);
  }

  openExibirPost(posts){
    this.navCtrl.push(ExibirPostPage,{'post': posts});
  }

  backToLogin(): any{
    this.navCtrl.popToRoot()
  }

  openAlterarFoto(){
    this.navCtrl.push(AlterarFotoPage);
  }

}
