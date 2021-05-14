import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../shared/models/user.model";
import { HttpService } from "../core/http.service";
import { TokenDto } from "../shared/models/token.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = 'https://miw-padel-back.herokuapp.com/user';

  constructor(private http: HttpClient, private httpService: HttpService) {
  }

  register(user: User): Observable<User> {
    return this.httpService.successful('User created successfully')
      .post(this.url+'/register',user);
  }

  prueba(): Observable<TokenDto>{
    return this.httpService.successful('holi')
      .get(this.url+'/prueba');
  }

}
