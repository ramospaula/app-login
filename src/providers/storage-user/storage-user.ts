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

  key2: string = 'checked';

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello StorageUserProvider Provider');
  }

  public save(user){
    return this.storage.set('user', user);
  }

  public getUser(){
    
    return this.storage.get('user');
  }
  
  public remove(){
    return this.storage.remove('user');
  }

  public savePhoto(id, photo){
    return this.storage.set(id, photo);
  }

  public getPhoto(id){ 
    return this.storage.get(id);
  }

  saveCheck(dadocheck){
    this.storage.set(this.key2, dadocheck);
    console.log('Salvando:' + dadocheck);
  }

  getCheck(){
    return this.storage.get(this.key2);
  }

  removeCheck(){
    this.storage.remove(this.key2);
  }

}

