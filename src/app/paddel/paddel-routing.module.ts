import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from "../core/role.model";
import {RoleGuardService} from "../core/role-guard.service";
import {PaddelComponent} from "./paddel.component";

const routes: Routes = [
  {
    path: '', // 'shop' to forRoot
    component: PaddelComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ROLE_ADMIN, Role.ROLE_PLAYER]},
    children: [ // or path: 'shop/articles'
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaddelRoutingModule {
}
