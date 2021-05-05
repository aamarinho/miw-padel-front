import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: LoginService) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  login() {
    console.log("peticion");
    console.log(this.email+ ' + ' + this.password);
    this.loginService.login(this.email,this.password).subscribe(result=>{
      console.log(result);
    });
  }
}
