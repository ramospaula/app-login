import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { PostsPage } from '../posts/posts';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ExibirPostPage } from '../exibir-post/exibir-post';
import { PostProvider } from '../../providers/post/post';
import { LoginPage } from '../login/login';
import { SessionProvider } from '../../providers/session/session';
import { LoginProvider } from '../../providers/login/login';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  /* public posts; */
  public lastPosts: any;


  user: any;
  sigla: any;
  foto;
  two: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider, private sessionProvider:SessionProvider, public loginProvider:LoginProvider) {
    this.lastPost();
  }

  ngOnInit() {

    this.sessionProvider.getUser().then((result: any) => {
      this.user = result;
      console.log(this.user);
      this.getBeginName(); 
    })
    
     
  }

  ionViewWillEnter(){
    this.sessionProvider.getFoto().then((result: any) => {
      this.foto = result;
      console.log(this.foto);
    });
  }

  getBeginName() {
    let str = this.user.nome;
    let res = str.split(" ");
    let firth = res[0].charAt(0);
    let last = res[res.length - 1].charAt(0);
    let sigla = firth.concat(last);
    this.sigla = sigla;
    console.log(this.sigla)
    
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

  



  openMensagens() {
    this.navCtrl.push(MensagensPage.name, { 'userId': this.user.id });
  }

  openPosts() {
    this.navCtrl.push(PostsPage.name);
  }

  openExibirPost(lastPosts) {
    this.navCtrl.push(ExibirPostPage.name, { 'post': lastPosts });
  }

  backToLogin() {
    this.sessionProvider.removeUser();
    this.sessionProvider.removeCheck();
    this.navCtrl.setRoot(LoginPage.name);
  }

  openAlterarFoto() {
    this.navCtrl.push(AlterarFotoPage.name);

  }

}
