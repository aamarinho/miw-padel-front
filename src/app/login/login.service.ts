import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenDto } from "./token.model";
import {User} from "../register/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = 'https://miw-padel-back.herokuapp.com/user';

  constructor(private http: HttpClient) {
  }

  login(email:string, password:string): Observable<TokenDto> {
    const headers = { 'content-type': 'application/json' };
    const body=JSON.stringify({email: email, password: password});
    return this.http.post<TokenDto>(this.url + '/login', body,{'headers':headers});
  }

  register(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json' };
    const body=JSON.stringify(user);
    console.log(body);
    return this.http.post<User>(this.url + '/register', body,{'headers':headers});
  }

}
