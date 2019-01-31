import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoginProvider } from '../../providers/login/login';
import { SessionProvider } from '../../providers/session/session';

/**
 * Generated class for the AlterarFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-foto',
  templateUrl: 'alterar-foto.html',
})
export class AlterarFotoPage {

  myphoto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public loginProvider: LoginProvider,public sessionProvider: SessionProvider) {
  }

  takePhoto(){
    
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
     this.sessionProvider.setFoto(this.myphoto);    
    }, (err) => {
     // Handle error
    });
  }

  getImage(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
     this.sessionProvider.setFoto(this.myphoto);
    }, (err) => {
     // Handle error
    });
  }

  ionViewWillEnter(){
    this.sessionProvider.getFoto().then((result: any) => {
      this.myphoto = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarFotoPage');
  }

}
