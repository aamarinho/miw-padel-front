import {Component} from '@angular/core';
import {ProfileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent{

  imageBack:any;

  constructor(private profileService: ProfileService) {
  }

  submit() {
    let formData = new FormData();
    formData.append('file',this.imageBack);
    this.profileService.setImage(formData).subscribe(result=>console.log(result));

  }

  onSelectedFile($event: any) {
    this.imageBack = $event.target.files[0];
  }
}
