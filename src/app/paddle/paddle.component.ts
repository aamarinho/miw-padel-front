import {Component, OnInit} from '@angular/core';
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";
import {ProfileService} from "../shared/services/profile.service";
import {MatDialog} from "@angular/material/dialog";
import {ProfileComponent} from "./profile/profile.component";

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent implements OnInit{

  isShown: boolean = false;

  constructor(public authService: AuthService,
              private router: Router,
              private profileService: ProfileService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(){
    this.profileService.getImage(this.authService.getEmail()).subscribe( result=> this.authService.setImage(result));
  }

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
    this.authService.image = "../../assets/images/default.png";
  }

  openProfile() {
    this.dialog.open(ProfileComponent).afterClosed().subscribe(()=> this.ngOnInit());
  }
}
