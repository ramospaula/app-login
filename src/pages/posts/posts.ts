import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  private listaPosts: Array<any> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.listaPosts = [
      {
       tituloPost: "titulo 1",
       post: "post 1",
      },
      {
       tituloPost: "titulo 2",
       post: "The British use the term, but the American term the English simply refuse to adopt.",
      }
      ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

}
