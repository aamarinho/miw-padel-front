import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RegisterComponent} from "./register/register.component";
import {SharedModule} from "../shared/shared-module";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
  ],
  entryComponents: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  providers: [
  ]
})
export class HomeModule {

}
