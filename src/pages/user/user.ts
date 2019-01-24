import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { PostsPage } from '../posts/posts';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ExibirPostPage } from '../exibir-post/exibir-post';
import { PostProvider } from '../../providers/post/post';
import { LoginPage } from '../login/login';
import { StorageUserProvider } from '../../providers/storage-user/storage-user';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {


public lastPosts: any;


 user: any;
 sigla: any;
 id;

 photo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider, private storageUser: StorageUserProvider) {
    this.lastPost(); 
    this.getPhoto();

  }
 
  ngOnInit() {
    this.storageUser.getUser().then(result => {
      this.user = (result);
      this.id = result.id;
      console.log(this.user);
      this.getBeginName();
      this.getPhoto();
      });

    console.log('ionViewDidLoad UserPage');
  }

  ionViewDidLoad() { 
    this.getPhoto();
  }



  getBeginName(){
    let res = this.user.nome.split(" ");
    let firth = res[0].charAt(0);
    let last = res[res.length - 1].charAt(0);
    this.sigla = firth.concat(last);
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

  getPhoto(){
    this.storageUser.getPhoto().then(result => {
      this.photo = result;
      console.log("hey");
      console.log(this.photo);
      if(this.photo == null){
        console.log("eu sou null");
      }else{
        console.log("nao sou null");
      }
    })
  }

 
  openMensagens(){
    this.navCtrl.push(MensagensPage.name);
  }

  openPosts(){
    this.navCtrl.push(PostsPage.name);
  }

  openExibirPost(lastPosts){
    this.navCtrl.push(ExibirPostPage.name,{'post': lastPosts});
  }

  backToLogin(){
    this.storageUser.remove();
    this.navCtrl.setRoot(LoginPage.name);
  }

  openAlterarFoto(){
    this.navCtrl.push(AlterarFotoPage.name, {'idUser': this.id});
  }

}
