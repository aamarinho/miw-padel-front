import {Component} from '@angular/core';
import {ProfileService} from "../../shared/services/profile.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent{
  image: any;

  constructor(private profileService: ProfileService, private dialogRef: MatDialogRef<ProfileComponent>) {
  }

  submit() {
    let formData = new FormData();
    formData.append('file',this.image);
    this.profileService.setImage(formData).subscribe(()=>{
      this.dialogRef.close();
    });
  }

  onSelectedFile($event: any) {
    this.image = $event.target.files[0];
  }
}
