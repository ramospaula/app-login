import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the StorageUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageUserProvider {

  usuario = {
    user:'',
    photo: ''
  };
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello StorageUserProvider Provider');
  }

  public save(user){
    this.usuario.user = user;
    return this.storage.set('user', user);
  }

  public getUser(){
    
    return this.storage.get('user');
  }
  
  public remove(){
    return this.storage.remove('user');
  }

  public savePhoto(photo){
    this.usuario.photo = photo;
    return this.storage.set('photo', photo);
  }

  public getPhoto(){ 
    return this.storage.get('photo');
  }

}

