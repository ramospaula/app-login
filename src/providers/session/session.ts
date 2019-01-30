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
  public checkedBox: boolean;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello SessionProvider Provider');
  }

  setUser(usuario) {
    this.storage.set(this.key, usuario);
    console.log('Salvando:' + usuario);
  }

  
  saveCheck(dadocheck){
    this.storage.set(this.key2, dadocheck);
    console.log('Salvando:' + dadocheck);
  }


  getUser() {
   return this.storage.get(this.key);
  }
 

  removeUser(){
    this.storage.remove(this.key);
  }

  removeCheck(){
    this.storage.remove(this.key2);
  }

  

  

  
  

}
