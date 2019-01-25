import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ExibirPostPage } from '../exibir-post/exibir-post';
import { PostProvider } from '../../providers/post/post';


@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
  providers: [
    PostProvider
  ]
})


export class PostsPage {

  public allPost:any = new Array;
  public loader;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private postProvider: PostProvider,
     private alertCtrl: AlertController,
     public loadingCtrl: LoadingController
     ) {
  }

  ionViewDidLoad() {
    this.allPosts();
    console.log('ionViewDidLoad PostsPage');
  }

  openExibirPost(posts){
    this.navCtrl.push(ExibirPostPage.name,{'post': posts});
  }
  
  allPosts(){
    this.openLoading();
    this.postProvider.getPostList().subscribe(
      data => {
        this.allPost = data;
        console.log(data);
        console.log(this.allPost);
        this.closeLoading();
      }, error => {
        this.alert(error.message);
        console.log(error)
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
