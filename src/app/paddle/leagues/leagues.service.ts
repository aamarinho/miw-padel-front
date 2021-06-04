import {Injectable} from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {League} from "../../shared/models/league.model";

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  url: string = 'https://miw-padel-back.herokuapp.com/league'

  constructor(private httpService: HttpService) { }

  get(): Observable<League[]>{
    return this.httpService.get(this.url);
  }

  create(league: League): Observable<League>{
    return this.httpService.successful('league successfully created')
      .post(this.url,league);
  }
}
