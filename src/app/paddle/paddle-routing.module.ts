import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from "../core/role.model";
import {RoleGuardService} from "../core/role-guard.service";
import {PaddleComponent} from "./paddle.component";
import {BookingsComponent} from "./bookings/bookings.component";
import {BookingDateComponent} from "./bookings/booking-date/booking-date.component";

const routes: Routes = [
  {
    path: '', // 'shop' to forRoot
    component: PaddleComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ROLE_ADMIN, Role.ROLE_PLAYER]},
    children: [ // or path: 'shop/articles'
      {path: 'bookings', component: BookingsComponent},
      {path: 'booking-date', component: BookingDateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaddleRoutingModule {
}
