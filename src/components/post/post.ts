import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
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
  data: string;
  constructor(
    public navCtrl: NavController,
    private datepipe: DatePipe
    ) {
    this.datepipe = new DatePipe("pt-BR");
    console.log('Hello PostComponent Component');
  }

  ngOnInit(){
    this.data = this.datepipe.transform(this.postPost.data, 'dd/MM/yyyy');
    this.postPost.data = this.datepipe.transform(this.postPost.data, 'short');
    this.post = this.postPost;
  }
  
}
