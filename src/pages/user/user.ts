import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { PostsPage } from '../posts/posts';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ExibirPostPage } from '../exibir-post/exibir-post';
import { PostProvider } from '../../providers/post/post';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
/* public posts; */
public lastPosts: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
    this.lastPost(); 
    /* this.posts = 
      {
       titulo: "A linguagem",
       autor: "admin",
       data: "08/01/2019",
       horario: "12:50",
       mensagem: "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável",
      } */
      
  }
 
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad UserPage');
  }


  lastPost(){
    this.postProvider.getLastPost().subscribe(
      data => {
        this.lastPosts = data;
        console.log(data);
        console.log(this.lastPosts);
        
      }, error => {
        console.log(error);
      }
    )
  }

  openMensagens(){
    this.navCtrl.push(MensagensPage);
  }

  openPosts(){
    this.navCtrl.push(PostsPage);
  }

  openExibirPost(lastPosts){
    this.navCtrl.push(ExibirPostPage,{'post': lastPosts});
  }

  backToLogin(){
    this.navCtrl.popToRoot()
  }

  openAlterarFoto(){
    this.navCtrl.push(AlterarFotoPage);
  }

}
