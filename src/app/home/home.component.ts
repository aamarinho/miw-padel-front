import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MatDialog} from "@angular/material/dialog";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShown:boolean = false;

  constructor(private dialog: MatDialog, private loginService: HomeService) { }

  ngOnInit(): void {
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
