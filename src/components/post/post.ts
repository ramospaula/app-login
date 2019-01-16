import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExibirPostPage } from '../../pages/exibir-post/exibir-post';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {

  @Input('meuPost') postPost;

  post: string;


  constructor(public navCtrl: NavController) {
    console.log('Hello PostComponent Component');
  }

  ngOnInit(){
    this.post = this.postPost;
  }
  
}
