import {Injectable} from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {PaddleCourtAvailabilityDto} from "../../shared/models/paddlecourtavailabilitydto.model";
import {PaddleCourt} from "../../shared/models/paddlecourt.model";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class PaddleCourtService {

  url: string = environment.REST + '/paddle-court';

  constructor(private httpService: HttpService) { }

  getAvailability(date: string): Observable<PaddleCourtAvailabilityDto[]>{
    return this.httpService
      .param("date",date)
      .successful('')
      .get(this.url+'/available');
  }

  get(): Observable<PaddleCourt[]>{
    return this.httpService
      .successful('')
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

  update(paddleCourt: PaddleCourt): Observable<PaddleCourt>{
    return this.httpService
      .successful('Paddle court successfully updated')
      .put(this.url,paddleCourt);
  }

}
