import {Injectable} from '@angular/core';
import {Couple} from "../../shared/models/couple.model";
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {IdDto} from "../../shared/models/iddto.model";
import {EmailDto} from "../../shared/models/emaildto.model";

@Injectable({
  providedIn: 'root'
})
export class CouplesService {

  url: string = 'https://miw-padel-back.herokuapp.com/couple'

  constructor(private httpService: HttpService) { }

  get(): Observable<Couple[]> {
    return this.httpService.get(this.url);
  }

  create(emailDto: EmailDto): Observable<Couple> {
    return this.httpService.successful('request successfully sent')
      .post(this.url,emailDto);
  }

  accept(idDto: IdDto): Observable<Couple> {
    return this.httpService
      .post(this.url+'/acceptance',idDto)
  }

  decline(id: string): Observable<Couple> {
    return this.httpService.successful('request successfully rejected')
      .param("id",id)
      .delete(this.url);
  }

}
