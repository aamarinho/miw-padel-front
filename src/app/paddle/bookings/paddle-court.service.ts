import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {PaddleCourtAvailabilityDto} from "../../shared/models/paddlecourtavailabilitydto.model";

@Injectable({
  providedIn: 'root'
})
export class PaddleCourtService {

  url: string = 'https://miw-padel-back.herokuapp.com/paddle-court'

  constructor(private httpService: HttpService) { }

  getAvailability(date: string): Observable<PaddleCourtAvailabilityDto[]>{
    return this.httpService
      .param("date",date)
      .get(this.url+'/available');
  }
}
