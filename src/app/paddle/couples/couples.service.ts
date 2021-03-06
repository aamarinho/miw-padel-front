import {Injectable} from '@angular/core';
import {Couple} from "../../shared/models/couple.model";
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {IdDto} from "../../shared/models/iddto.model";
import {EmailDto} from "../../shared/models/emaildto.model";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CouplesService {

  url: string = environment.REST + '/couple';

  constructor(private httpService: HttpService) { }

  get(): Observable<Couple[]> {
    return this.httpService
      .successful('')
      .get(this.url);
  }

  create(emailDto: EmailDto): Observable<Couple> {
    return this.httpService
      .successful('Request successfully sent')
      .post(this.url,emailDto);
  }

  accept(idDto: IdDto): Observable<Couple> {
    return this.httpService
      .successful('Request successfully accepted')
      .put(this.url,idDto)
  }

  decline(id: string): Observable<Couple> {
    return this.httpService
      .successful('Request successfully rejected')
      .param("id",id)
      .delete(this.url);
  }

}
