import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miw-padel-front';
  isShown:boolean = false;

  constructor(private dialog: MatDialog, private loginService: LoginService) {
  }

  login(): void {
    this.dialog.open(LoginComponent, {
      minWidth: '340px',
      minHeight: '200px'
    })
      .afterClosed()
      .subscribe(()=>console.log("Closing login"));
  }

  register(): void {
    this.dialog.open(RegisterComponent, {
      minWidth: '340px',
      minHeight: '200px'
    })
      .afterClosed()
      .subscribe(()=> console.log("Closing register"));
  }

  prueba() {
    this.loginService.prueba().subscribe(result=>console.log(result));
  }
}
