import {Component, Input, OnInit} from '@angular/core';
import {PaddleCourtAvailabilityDto} from "../../../../shared/models/paddlecourtavailabilitydto.model";
import {BookingsService} from "../../bookings.service";
import {BookingDto} from "../../../../shared/models/bookingdto.model";
import {AuthService} from "../../../../core/auth.service";

export interface TimeAvailability{
  initialHour: string;
  endHour: string;
  availability: boolean;
}

@Component({
  selector: 'app-paddle-court-availability',
  templateUrl: './paddle-court-availability.component.html',
  styleUrls: ['./paddle-court-availability.component.css']
})
export class PaddleCourtAvailabilityComponent implements OnInit {

  displayedColumns: string[] = ['initialHour', 'endHour', 'book'];
  timesAvailability: TimeAvailability[];
  @Input() paddleCourtAvailabilityDto: PaddleCourtAvailabilityDto = {
    name: '',
    date: new Date(),
    availabilityHours: new Map()
  };

  constructor(private bookingsService: BookingsService, private authService: AuthService) {
    this.timesAvailability = new Array<TimeAvailability>();
  }

  ngOnInit(): void {
    this.timesAvailability = new Array<TimeAvailability>();
    let i = 0;
    this.paddleCourtAvailabilityDto.availabilityHours.forEach((value: boolean, key: string) => {
      let hours = key.split('-');
      this.timesAvailability[i] = {initialHour: hours[0].trim(), endHour: hours[1].trim(), availability: value};
      i++;
    });
  }

  book(booking: TimeAvailability) {
    let bookingDto : BookingDto = {
      id: '',
      email: this.authService.getEmail(),
      paddleCourtName: this.paddleCourtAvailabilityDto.name,
      date: this.paddleCourtAvailabilityDto.date,
      timeRange: booking.initialHour.trim()+' - '+booking.endHour.trim()
    }
    this.bookingsService.create(bookingDto).subscribe(()=> booking.availability = false);
  }


}
