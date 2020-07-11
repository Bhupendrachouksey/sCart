import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'https://xebiascart.herokuapp.com/users?username=amigo';
  constructor(private http: HttpClient) { }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password;
    return this.http.get(this.rootUrl);
  }

}