import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { StorageUserProvider } from '../../providers/storage-user/storage-user';

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
 
  photo: string = ''
  id;

  myphoto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public photoStorage: StorageUserProvider) {
  }

  takePhoto(tipo){
    
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: tipo =="foto" ?
       this.camera.PictureSourceType.CAMERA: 
       this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
     this.photoStorage.savePhoto(this.id, this.photo);    
    }, (err) => {
     // Handle error
    });
  }


  ionViewWillEnter(){
    this.photoStorage.getPhoto(this.id).then((result: any) => {
      this.myphoto = result;
    });
  }


}


