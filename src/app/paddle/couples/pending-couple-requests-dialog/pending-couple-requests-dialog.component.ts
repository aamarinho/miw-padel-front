import {Component, OnInit} from '@angular/core';
import {CouplesService} from "../couples.service";
import {Couple} from "../../../shared/models/couple.model";
import {CoupleState} from "../../../shared/models/couplestate.model";
import {AuthService} from "../../../core/auth.service";
import {IdDto} from "../../../shared/models/iddto.model";
import {ProfileService} from "../../../shared/services/profile.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../../shared/dialogs/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-pending-couple-requests-dialog',
  templateUrl: './pending-couple-requests-dialog.component.html',
  styleUrls: ['./pending-couple-requests-dialog.component.css']
})
export class PendingCoupleRequestsDialogComponent implements OnInit {

  couples: Couple[];

  constructor(private couplesService: CouplesService,
              private profileService: ProfileService,
              private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              private dialog: MatDialog,
              public authService: AuthService) {
    this.couples = new Array<Couple>();
  }

  ngOnInit(): void {
    this.couplesService.get().subscribe(result=>{
      this.couples = result;
      this.couples = this.couples.filter(couple=>couple.coupleState==CoupleState.PENDING && couple.captainEmail!=this.authService.getEmail());
      this.couples.forEach(couple => {
        couple.captainImage = "../../../assets/images/default.png";
        this.profileService.getCaptainImageAndPut(couple);
      });
    });
  }

  accept(couple: Couple) {
    let idDto : IdDto = { id: couple.id };
    this.couplesService.accept(idDto).subscribe(()=> this.ngOnInit());
  }

  decline(couple: Couple) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure you want to decline?"
    });

    this.dialogRef.afterClosed().subscribe(result=> {
      if(result)
        this.couplesService.decline(couple.id).subscribe(()=> this.ngOnInit());
      this.dialogRef.close();
    });
  }

}
