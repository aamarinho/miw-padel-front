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

  constructor(private dialog: MatDialog) {
  }

  login(): void {
    this.dialog.open(LoginComponent)
      .afterClosed()
      .subscribe(result=>console.log("Closing login"));
  }
}
