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

  @Input('meuTitulo') TituloPost;
  @Input('meuPost') postPost;
  @Input('minhaData') dataPost;

  text: string;

  titulo: string;
  post: string;
  data: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello PostComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit(){
    this.titulo = this.TituloPost;
    this.post = this.postPost;
    this.data = this.dataPost;
  }

  
}
