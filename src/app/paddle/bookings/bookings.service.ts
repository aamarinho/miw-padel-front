import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable, of} from "rxjs";
import {BookingDto} from "./bookingdto-model";
import {User} from "../../shared/models/user.model";
import {Role} from "../../core/role.model";
import {Gender} from "../../shared/models/gender.model";
import {PaddleCourt} from "./paddlecourt-model";
import {PaddleCourtType} from "./paddlecourttype-model";

const USER: User = {
  firstName: 'aaaa',
  familyName: 'bbbb',
  email: 'cccc',
  roles: [Role.ROLE_PLAYER],
  password: 'dddd',
  gender: Gender.FEMALE,
  birthDate: new Date()
}

const PADDLE_COURT: PaddleCourt = {
  name: 'name',
  paddleCourtType: PaddleCourtType.OUTDOOR,
  startTimes: [String(2)],
  endTimes: [String(2)],
  disabled: false
}

const ELEMENT_DATA: BookingDto[] = [
  {email: USER.email, paddleCourtName: PADDLE_COURT.name, date: new Date(), timeRange: "11:00-12:00"},
  {email: USER.email, paddleCourtName: PADDLE_COURT.name, date: new Date(), timeRange: "11:00-12:00"},
  {email: USER.email, paddleCourtName: PADDLE_COURT.name, date: new Date(), timeRange: "11:00-12:00"},
  {email: USER.email, paddleCourtName: PADDLE_COURT.name, date: new Date(), timeRange: "11:00-12:00"},
  {email: USER.email, paddleCourtName: PADDLE_COURT.name, date: new Date(), timeRange: "11:00-12:00"},
  {email: USER.email, paddleCourtName: PADDLE_COURT.name, date: new Date(), timeRange: "11:00-12:00"},
];

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  url: string = 'https://miw-padel-back.herokuapp.com/booking'

  constructor(private httpService: HttpService) { }

  get(date?: string): Observable<BookingDto[]>{
    /*return this.httpService.successful('good')
      .get(this.url+"date="+date);*/
    return of(ELEMENT_DATA);
  }
}
