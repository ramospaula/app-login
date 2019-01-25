import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
  /* public posts; */
  public lastPosts: any;


  user: any;
  sigla: any;

  public loader;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private postProvider: PostProvider,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.lastPost();
    this.user = this.navParams.get('user');
  }

  ngOnInit() {

    console.log(this.user);
    this.getBeginName();
  };


  getBeginName() {
    let str = this.user.nome;
    let res = str.split(" ");
    let firth = res[0].charAt(0);
    let last = res[res.length - 1].charAt(0);
    let sigla = firth.concat(last);
    this.sigla = sigla;
    console.log(res);
    console.log(firth);
    console.log(last);
    console.log(sigla);
  }

  lastPost() {
    this.openLoading();
    this.postProvider.getLastPost().subscribe(
      data => {
        this.lastPosts = data;
        console.log(data);
        console.log(this.lastPosts);
        this.closeLoading();
      }, error => {
        this.alert(error.message);
        console.log(error);
        this.closeLoading();
      }
    )
  }

  alert(mensagem){
    const alert = this.alertCtrl.create({
      subTitle:''+ mensagem,
      buttons: ['OK']
    });
    alert.present();
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
    this.logout();
  }

  openAlterarFoto() {
    this.navCtrl.push(AlterarFotoPage.name);
  }

  logout() {
    const confirm = this.alertCtrl.create({
      subTitle: "deseja sair? ",
      buttons: [
        {
          text: 'Nao',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.setRoot(LoginPage.name);
          }
        }
      ]
    });
    confirm.present();
  }

  openLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

}
