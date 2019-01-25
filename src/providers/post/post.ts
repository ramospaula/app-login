import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

  getPostList(){
    return this.http.get('http://aulas2.getsandbox.com/posts');
  }

  getLastPost(){
    return this.http.get('http://aulas2.getsandbox.com/last_post');
  }

  getMessageList(id){
    return this.http.get('http://aulas2.getsandbox.com/msgs/'+ id);
  }

}
