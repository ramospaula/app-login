import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import hasha  from 'hasha';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {


  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  postLogin(username, password) {

    let sha = hasha(password ,{algorithm: 'sha256', encoding: 'base64'});
    console.log(sha);

    return new Promise((resolve, reject) => {
      var data = {
        login: username,
        senha: sha
      };

      this.post(data).subscribe((result: any) => {
          resolve(result);
          console.log(data);
          console.log(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  post(data){
    return this.http.post('http://aulas.getsandbox.com/login', data);
  }

}
