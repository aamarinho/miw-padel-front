import {NgModule} from '@angular/core';
import {PaddleComponent} from "./paddle.component";
import {PaddleRoutingModule} from "./paddle-routing.module";
import {SharedModule} from "../shared/shared-module";
import { BookingsComponent } from './bookings/bookings.component';
import { BookingDateComponent } from './bookings/booking-date/booking-date.component';
import {DatePipe} from "@angular/common";
import { BookingPaddleCourtComponent } from './bookings/booking-paddle-court/booking-paddle-court.component';
import { PaddleCourtComponent } from './bookings/booking-paddle-court/paddle-court/paddle-court.component';

@NgModule({
  declarations: [
    PaddleComponent,
    BookingsComponent,
    BookingDateComponent,
    BookingPaddleCourtComponent,
    PaddleCourtComponent
  ],
  entryComponents: [
    //ArticleCreationUpdatingDialogComponent,
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
