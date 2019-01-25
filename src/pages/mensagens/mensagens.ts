import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ExibirMensagemPage } from '../exibir-mensagem/exibir-mensagem';
import { PostProvider } from '../../providers/post/post';
/**
 * Generated class for the MensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html',
})
export class MensagensPage {

  searchQuery: string = '';

  public message:any = new Array;
  public filtro:any = new Array;
  public id;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private messagePost: PostProvider,
    private alertCtrl: AlertController) {

    this.id = this.navParams.get('userId');
      this.messagePost.getMessageList(this.id).subscribe(
        data => {
          this.message = data;
          this.filtro = this.message;
          
          console.log(data);
        }, error => {
          this.alert(error.message) 
          console.log(error);
        }
      )
      console.log(this.id);
      console.log(this.message);
      this.initializeItems();
      };
      
      alert(mensagem){
        const alert = this.alertCtrl.create({
          subTitle:''+ mensagem,
          buttons: ['OK']
        });
        alert.present();
      }

  initializeItems() {
    this.message = this.filtro;
  }

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.message = this.message.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagensPage');
  } 



  openExibirMensagem(item){
    this.navCtrl.push(ExibirMensagemPage.name,{'id': item});
  }

}

