import {Component, OnInit} from '@angular/core';
import {PaddleCourtAvailabilityDto} from "../../../shared/models/paddlecourtavailabilitydto.model";
import {PaddleCourtService} from "../../paddle-courts/paddle-court.service";
import {Common} from "../../../shared/common";

@Component({
  selector: 'app-booking-paddlecourt',
  templateUrl: './booking-paddle-court.component.html'
})
export class BookingPaddleCourtComponent implements OnInit{

  data: PaddleCourtAvailabilityDto[];

  constructor(private paddleCourtService: PaddleCourtService) {
    this.data = new Array<PaddleCourtAvailabilityDto>();
  }

  ngOnInit() {
    this.getAvailabilityPaddleCourtByDate(Common.getTodayDate());
  }

  getAvailabilityPaddleCourtByDate(date: string) {
    this.paddleCourtService.getAvailability(date).subscribe(result=>{
      result.sort((obj1, obj2) => {
        if (obj1.name > obj2.name) {
          return 1;
        } else if (obj1.name < obj2.name) {
          return -1;
        }
        return 0;
      });
      this.data = result;
      this.data.forEach(x=>x.availabilityHours = new Map<string,boolean>(Object.entries(x.availabilityHours)));
    });
  }

}
