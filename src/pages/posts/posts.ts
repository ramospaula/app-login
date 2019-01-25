import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private postProvider: PostProvider,
     private alertCtrl: AlertController
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
    this.postProvider.getPostList().subscribe(
      data => {
        this.allPost = data;
        console.log(data);
        console.log(this.allPost);
      }, error => {
        this.alert(error.message);
        console.log(error)
       
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



}
