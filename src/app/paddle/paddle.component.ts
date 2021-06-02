import { Component } from '@angular/core';
import { AuthService } from "../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent{

  isShown:boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isPlayer(): boolean {
    return this.authService.isPlayer();
  }

  getUsername(): string | undefined{
    return this.authService.getEmail();
  }

  logout() {
    this.authService.logout();
  }

  openProfile() {
    this.router.navigate(["/paddle/profile"]);
  }
}
