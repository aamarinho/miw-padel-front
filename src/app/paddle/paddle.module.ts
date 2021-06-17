import {NgModule} from '@angular/core';
import {PaddleComponent} from "./paddle.component";
import {PaddleRoutingModule} from "./paddle-routing.module";
import {SharedModule} from "../shared/shared.module";
import {BookingsComponent} from './bookings/bookings.component';
import {BookingDateComponent} from './bookings/booking-date/booking-date.component';
import {DatePipe} from "@angular/common";
import {BookingPaddleCourtComponent} from './bookings/booking-paddle-court/booking-paddle-court.component';
import {PaddleCourtAvailabilityComponent} from './bookings/booking-paddle-court/paddle-court-availability/paddle-court-availability.component';
import {PaddleCourtsComponent} from './paddle-courts/paddle-courts.component';
import {AddUpdatePaddleCourtComponent} from './paddle-courts/add-update-paddle-court/add-update-paddle-court.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { CouplesComponent } from './couples/couples.component';
import { PendingCoupleRequestsDialogComponent } from './couples/pending-couple-requests-dialog/pending-couple-requests-dialog.component';
import { SendCoupleRequestDialogComponent } from './couples/send-couple-request-dialog/send-couple-request-dialog.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { CouplesLeagueComponent } from './leagues/couples-league/couples-league.component';
import { AddLeagueComponent } from './leagues/add-league/add-league.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    BookingDateComponent,
    BookingsComponent,
    BookingPaddleCourtComponent,
    PaddleComponent,
    PaddleCourtAvailabilityComponent,
    PaddleCourtsComponent,
    AddUpdatePaddleCourtComponent,
    CouplesComponent,
    PendingCoupleRequestsDialogComponent,
    SendCoupleRequestDialogComponent,
    LeaguesComponent,
    CouplesLeagueComponent,
    AddLeagueComponent,
    ProfileComponent,
    HomePageComponent
  ],
  entryComponents: [
  ],
  imports: [
    PaddleRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule/*.setLocale('ar-AE')*/
  ],
  providers: [
    DatePipe
  ],
})
export class PaddleModule {
}
