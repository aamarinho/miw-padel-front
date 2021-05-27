import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {PaddleCourtAvailabilityDto} from "../../shared/models/paddlecourtavailabilitydto.model";
import {PaddleCourt} from "../../shared/models/paddlecourt.model";

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

  get(): Observable<PaddleCourt[]>{
    return this.httpService
      .get(this.url);
  }

  create(paddleCourt: PaddleCourt): Observable<PaddleCourt>{
    return this.httpService
      .successful('Paddle court successfully created')
      .post(this.url,paddleCourt);
  }

  delete(name: string): Observable<PaddleCourt>{
    return this.httpService
      .successful('Paddle court successfully deleted')
      .param('name',name)
      .delete(this.url);
  }

}
