import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the ExibirPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibir-post',
  templateUrl: 'exibir-post.html',
})
export class ExibirPostPage {

  public post;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private datepipe: DatePipe) {
      this.datepipe = new DatePipe("pt-BR");
    this.post = this.navParams.get('post');
  }



  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ExibirPostPage');
  }


}
