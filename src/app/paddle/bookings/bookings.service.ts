import { Injectable } from '@angular/core';
import { HttpService } from "../../core/http.service";
import { Observable } from "rxjs";
import { BookingDto } from "./bookingdto-model";

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  url: string = 'https://miw-padel-back.herokuapp.com/booking'

  constructor(private httpService: HttpService) { }

  get(date?: string): Observable<BookingDto[]>{
    return this.httpService
      .param("date",date)
      .get(this.url);
  }
}
