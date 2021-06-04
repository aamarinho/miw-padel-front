import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable, of} from "rxjs";
import {League} from "../../shared/models/league.model";
import {Common} from "../../shared/common";

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  url: string = 'https://miw-padel-back.herokuapp.com/paddle-court'

  constructor(private httpService: HttpService) { }

  get(): Observable<League[]>{
    return of(Common.LEAGUES);
  }

  create(league: League): Observable<League>{
    return of(Common.LEAGUES[0]);
  }
}
