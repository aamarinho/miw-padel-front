import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../shared/models/user.model";
import {HttpService} from "../core/http.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = 'https://miw-padel-back.herokuapp.com/user';

  constructor(private httpService: HttpService) {
  }

  register(user: User): Observable<User> {
    return this.httpService
      .successful('User successfully created')
      .post(this.url+'/register',user);
  }

}
