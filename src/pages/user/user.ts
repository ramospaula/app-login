import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { PostsPage } from '../posts/posts';
import { AlterarFotoPage } from '../alterar-foto/alterar-foto';
import { ExibirPostPage } from '../exibir-post/exibir-post';
import { PostProvider } from '../../providers/post/post';
import { LoginPage } from '../login/login';
import { LoginProvider } from '../../providers/login/login';
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

  public loader;
  foto;
  two: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private postProvider: PostProvider,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, 
    private storageUser:StorageUserProvider, 
    public loginProvider:LoginProvider) {
    this.lastPost();
    this.user = this.navParams.get('user');
  }

  ngOnInit() {
    this.storageUser.getUser().then(result => {
      this.user = (result);
      console.log(this.user);
      this.getBeginName();
      this.getPhoto();
      });
  }

  ionViewWillEnter(){
    this.getPhoto();
  }

  getBeginName(){
    let res = this.user.nome.split(" ");
    let firth = res[0].charAt(0);
    let last = res[res.length - 1].charAt(0);
    this.sigla = firth.concat(last);
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
  
  getPhoto(){
    this.storageUser.getPhoto(this.user.id).then(result => {
      this.foto = result;
      console.log("hey");
      console.log(this.foto);
      if(this.foto == null){
        console.log("eu sou null");
      }else{
        console.log("nao sou null");
      }
    })
  }

  openPosts() {
    this.navCtrl.push(PostsPage.name);
  }

  openExibirPost(lastPosts) {
    this.navCtrl.push(ExibirPostPage.name, { 'post': lastPosts });
  }
 
  backToLogin() {
    this.logout();
    this.storageUser.remove();
    this.storageUser.removeCheck();
  }

  
  openAlterarFoto(){
    this.navCtrl.push(AlterarFotoPage.name, {'idUser': this.user.id});
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
