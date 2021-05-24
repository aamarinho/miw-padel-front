import {Injectable} from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable} from "rxjs";
import {BookingDto} from "../../shared/models/bookingdto.model";

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

  delete(id: string) {
    return this.httpService
      .successful('Booking successfully deleted')
      .param("id",id)
      .delete(this.url);
  }

  create(booking: BookingDto): Observable<BookingDto>{
    return this.httpService
      .successful('Paddle court successfully booked')
      .post(this.url, booking);
  }
}
