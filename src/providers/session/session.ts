import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  public user;
  name: string;
  senha: string;
  key: string = 'username';
  key1: string = 'password';
  key2: string = 'checked';
  key3: string = 'foto';
  public checkedBox: boolean;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello SessionProvider Provider');
  }

  setUser(usuario) {
    this.storage.set(this.key, usuario);
    console.log('Salvando:' + usuario);
  }

  setFoto(photo){
    this.storage.set(this.key3, photo);
    console.log('Salvando:' + photo);
  }

  
  saveCheck(dadocheck){
    this.storage.set(this.key2, dadocheck);
    console.log('Salvando:' + dadocheck);
  }


  getUser() {
   return this.storage.get(this.key);
  }

  getFoto(){
    return this.storage.get(this.key3);
  }
 

  removeUser(){
    this.storage.remove(this.key);
  }

  removeCheck(){
    this.storage.remove(this.key2);
  }

  removeFoto(){
    this.storage.remove(this.key3);
  }

  

  

  
  

}
