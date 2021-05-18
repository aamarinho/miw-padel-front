import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})
export class BookingDateComponent implements OnInit {

  date: Date;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private datePipe: DatePipe) {
    this.date = new Date();
  }

  ngOnInit(): void {
  }

  submit() {
    let transformDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.newItemEvent.emit(transformDate);
    //this.router.navigate(['/paddle/bookings']);
  }
}
