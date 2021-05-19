import { Component } from '@angular/core';
import { AuthService } from "../core/auth.service";

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent{

  isShown:boolean = false;

  constructor(private authService: AuthService) { }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUsername(): string | undefined{
    return this.authService.getEmail();
  }

  logout() {
    this.authService.logout();
  }
}
