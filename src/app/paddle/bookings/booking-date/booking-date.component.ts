import {Component, Output, EventEmitter} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html'
})
export class BookingDateComponent {

  date: Date;
  minDate: Date;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private datePipe: DatePipe) {
    this.date = new Date();
    this.minDate = new Date();
  }
  submit() {
    let transformDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.newItemEvent.emit(transformDate);
  }
}
