import { Component } from '@angular/core';
import {PaddleCourtAvailabilityDto} from "../../../shared/models/paddlecourtavailabilitydto.model";
import {PaddleCourtService} from "../paddle-court.service";

@Component({
  selector: 'app-booking-paddlecourt',
  templateUrl: './booking-paddle-court.component.html',
  styleUrls: ['./booking-paddle-court.component.css']
})
export class BookingPaddleCourtComponent {

  data: PaddleCourtAvailabilityDto[];

  constructor(private paddleCourtService: PaddleCourtService) {
    this.data = new Array<PaddleCourtAvailabilityDto>();
  }

  getAvailabilityPaddleCourtByDate(date: string) {
    this.paddleCourtService.getAvailability(date).subscribe(result=>{
      this.data = result;
      this.data.map(x=>x.availabilityHours = new Map<string,boolean>(Object.entries(x.availabilityHours))).sort();
    })
  }
}
