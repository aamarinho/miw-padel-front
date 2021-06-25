import {Injectable} from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {League} from "../../shared/models/league.model";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  url: string = environment.REST + '/league';

  constructor(private httpService: HttpService) { }

  get(): Observable<League[]>{
    return this.httpService
      .successful('')
      .get(this.url);
  }

  create(league: League): Observable<League>{
    return this.httpService
      .successful('league successfully created')
      .post(this.url,league);
  }
}
