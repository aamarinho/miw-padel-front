import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../shared/models/user.model";
import {HttpService} from "../core/http.service";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = environment.REST + '/user';

  constructor(private httpService: HttpService) {
  }

  register(user: User): Observable<User> {
    return this.httpService
      .successful('User successfully created')
      .post(this.url + '/register', user);
  }

}
