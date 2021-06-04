import { Component } from '@angular/core';
import { AuthService } from "../core/auth.service";
import {Router} from "@angular/router";
import {ProfileService} from "./profile/profile.service";

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent {

  isShown:boolean = false;
  image:any;

  constructor(private authService: AuthService,
              private router: Router,
              private profileService: ProfileService) {
    this.getImage();
  }

  getImage(){
    this.profileService.getImage(this.authService.getEmail()).subscribe(result=>{
     this.createImageFromBlob(result);
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load",()=>{
      this.image = reader.result;
    },false);
    if(image)
      reader.readAsDataURL(image);
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
  }

  openProfile() {
    this.router.navigate(["/paddle/profile"]);
  }
}
