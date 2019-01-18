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
/* public posts; */
public lastPosts: any;


 user: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider, private storageUser: StorageUserProvider) {
    this.lastPost(); 
  }
 
  ngOnInit() {
    this.storageUser.getUser().then(result => {
      this.user = (result);
      console.log(this.user);
      });

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
    this.navCtrl.push(MensagensPage.name);
  }

  openPosts(){
    this.navCtrl.push(PostsPage.name);
  }

  openExibirPost(lastPosts){
    this.navCtrl.push(ExibirPostPage.name,{'post': lastPosts});
  }

  backToLogin(){
    this.navCtrl.setRoot(LoginPage.name);
  }

  openAlterarFoto(){
    this.navCtrl.push(AlterarFotoPage.name);
  }

}
