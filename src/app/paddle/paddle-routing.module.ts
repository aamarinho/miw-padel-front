import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Role} from "../core/role.model";
import {RoleGuardService} from "../core/role-guard.service";
import {PaddleComponent} from "./paddle.component";
import {BookingsComponent} from "./bookings/bookings.component";
import {BookingDateComponent} from "./bookings/booking-date/booking-date.component";
import {BookingPaddleCourtComponent} from "./bookings/booking-paddle-court/booking-paddle-court.component";
import {PaddleCourtsComponent} from "./paddle-courts/paddle-courts.component";
import {CouplesComponent} from "./couples/couples.component";
import {LeaguesComponent} from "./leagues/leagues.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: PaddleComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ROLE_ADMIN, Role.ROLE_PLAYER]},
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'bookings', component: BookingsComponent},
      {path: 'booking-date', component: BookingDateComponent},
      {path: 'booking-paddle-court', component: BookingPaddleCourtComponent},
      {path: 'paddle-courts', component: PaddleCourtsComponent},
      {path: 'couples', component: CouplesComponent},
      {path: 'leagues', component: LeaguesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaddleRoutingModule {
}
