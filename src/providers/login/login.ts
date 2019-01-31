import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import hasha  from 'hasha';



@Injectable()
export class LoginProvider {
  
  photo: string = null;

  constructor(public http: HttpClient
    ) {
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
          console.log(error);
          reject(error);
        });
    });
  }

  post(data){
    return this.http.post('http://aulas2.getsandbox.com/login', data);
  }

  getFotoAvatar(){
    return this.photo;
  }

  setFotoAvatar(img){
    return this.photo = img;
  }

}
