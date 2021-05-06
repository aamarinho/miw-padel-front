import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miw-padel-front';
  navbarCollapsed = true;

  constructor(private dialog: MatDialog) {
  }

  login(): void {
    this.dialog.open(LoginComponent, {
      minWidth: '340px',
      minHeight: '200px'
    })
      .afterClosed()
      .subscribe(()=>console.log("Closing login"));
  }

}
