import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  options:any;

  takePicture(tipo) {
    this.photo = '';


    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: tipo == "photo" ? this.camera.PictureSourceType.CAMERA: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }

    this.options = options;

    this.camera.getPicture(this.options)
    .then((imageData) => {
      this.photo = 'data:image/jpeg;base64,' + imageData;

    }, (error) => {
      console.error(error);
    })
    .catch((error) => {
      console.error(error);
    })
}

getImage(){
  this.camera.getPicture(this.options)
    .then((imageData) => {
      this.photo = 'data:image/jpeg;base64,' + imageData;

    }, (error) => {
      console.error(error);
    })
    .catch((error) => {
      console.error(error);
    })
}

}
