import {NgModule} from '@angular/core';
import {PaddleComponent} from "./paddle.component";
import {PaddleRoutingModule} from "./paddle-routing.module";
import {SharedModule} from "../shared/shared-module";
import {BookingsComponent} from './bookings/bookings.component';
import {BookingDateComponent} from './bookings/booking-date/booking-date.component';
import {DatePipe} from "@angular/common";
import {BookingPaddleCourtComponent} from './bookings/booking-paddle-court/booking-paddle-court.component';
import {PaddleCourtAvailabilityComponent} from './bookings/booking-paddle-court/paddle-court-availability/paddle-court-availability.component';

@NgModule({
  declarations: [
    BookingDateComponent,
    BookingsComponent,
    BookingPaddleCourtComponent,
    PaddleComponent,
    PaddleCourtAvailabilityComponent
  ],
  entryComponents: [
  ],
  imports: [
    PaddleRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ],
})
export class PaddleModule {
}
