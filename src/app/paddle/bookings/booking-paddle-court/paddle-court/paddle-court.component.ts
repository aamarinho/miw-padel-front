import {Component, Input, OnInit} from '@angular/core';
import {PaddleCourtAvailabilityDto} from "../../../../shared/models/paddlecourtavailabilitydto.model";

export interface TimeAvailability{
  initialHour: string;
  endHour: string;
  availability: boolean;
}

@Component({
  selector: 'app-paddle-court',
  templateUrl: './paddle-court.component.html',
  styleUrls: ['./paddle-court.component.css']
})
export class PaddleCourtComponent implements OnInit {

  displayedColumns: string[] = ['initialHour', 'endHour', 'book'];
  timesAvailability: TimeAvailability[];
  @Input() paddleCourtAvailabilityDto: PaddleCourtAvailabilityDto = {
    name: '',
    date: new Date(),
    availabilityHours: new Map()
  };

  constructor() {
    this.timesAvailability = new Array<TimeAvailability>();
  }

  ngOnInit(): void {
    let i = 0;
    this.paddleCourtAvailabilityDto.availabilityHours.forEach((value: boolean, key: string) => {
      let hours = key.split('-');
      this.timesAvailability[i] = {initialHour: hours[0], endHour: hours[1], availability: value};
      i++;
    });
  }

}
