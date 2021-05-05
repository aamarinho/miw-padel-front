import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenDto } from "./token.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = '/api';

  constructor(private http: HttpClient) {
  }

  login(email:string, password:string): Observable<TokenDto> {
    const headers = { 'content-type': 'application/json' };
    const body=JSON.stringify({email: email, password: password});
    console.log(body);
    return this.http.post<TokenDto>(this.url + '/login', body,{'headers':headers});
  }

}
