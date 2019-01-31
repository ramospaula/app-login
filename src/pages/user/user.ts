import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { PostsPage } from '../posts/posts';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ExibirPostPage } from '../exibir-post/exibir-post';
import { PostProvider } from '../../providers/post/post';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
<<<<<<< HEAD
  /* public posts; */
  public lastPosts: any;


  user: any;
  sigla: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
    this.lastPost();
    this.user = this.navParams.get('user');
=======


public lastPosts: any;


 user: any;
 sigla: any;
 id;

 photo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider, private storageUser: StorageUserProvider) {
    this.lastPost();
>>>>>>> feature
  }

  ngOnInit() {
<<<<<<< HEAD
=======
    this.storageUser.getUser().then(result => {
      this.user = (result);
      this.id = result.id;
      console.log(this.user);
      this.getBeginName();
      this.getPhoto();
      });
>>>>>>> feature

    console.log(this.user);
    this.getBeginName();
  };


<<<<<<< HEAD
  getBeginName() {
    let str = this.user.nome;
    let res = str.split(" ");
=======

  ionViewWillEnter(){
    this.getPhoto();
  }



  getBeginName(){
    let res = this.user.nome.split(" ");
>>>>>>> feature
    let firth = res[0].charAt(0);
    let last = res[res.length - 1].charAt(0);
    this.sigla = firth.concat(last);
  }

  lastPost() {
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

<<<<<<< HEAD

  openMensagens() {
    this.navCtrl.push(MensagensPage.name, { 'userId': this.user.id });
=======
  getPhoto(){
    this.storageUser.getPhoto(this.id).then(result => {
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
>>>>>>> feature
  }

  openPosts() {
    this.navCtrl.push(PostsPage.name);
  }

  openExibirPost(lastPosts) {
    this.navCtrl.push(ExibirPostPage.name, { 'post': lastPosts });
  }

  backToLogin() {
    this.navCtrl.setRoot(LoginPage.name);
  }

<<<<<<< HEAD
  openAlterarFoto() {
    this.navCtrl.push(AlterarFotoPage.name);
=======
  openAlterarFoto(){
    this.navCtrl.push(AlterarFotoPage.name, {'idUser': this.id});
>>>>>>> feature
  }

}
