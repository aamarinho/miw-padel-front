import {Component, OnInit} from '@angular/core';
import {CouplesService} from "../couples.service";
import {Couple} from "../../../shared/models/couple.model";
import {CoupleState} from "../../../shared/models/couplestate.model";
import {AuthService} from "../../../core/auth.service";
import {IdDto} from "../../../shared/models/iddto.model";

@Component({
  selector: 'app-pending-couple-requests-dialog',
  templateUrl: './pending-couple-requests-dialog.component.html',
  styleUrls: ['./pending-couple-requests-dialog.component.css']
})
export class PendingCoupleRequestsDialogComponent implements OnInit {

  couples: Couple[];

  constructor(private couplesService: CouplesService, private authService: AuthService) {
    this.couples = new Array<Couple>();
  }

  ngOnInit(): void {
    this.couplesService.get().subscribe(result=>{
      this.couples = result;
      this.couples = this.couples.filter(couple=>couple.coupleState==CoupleState.PENDING && couple.captainEmail!=this.authService.getEmail());
    });
  }

  accept(couple: Couple) {
    let idDto : IdDto = { id: couple.id };
    this.couplesService.accept(idDto).subscribe(result=>{
      this.ngOnInit();
      console.log(result);
    });
  }

  decline(couple: Couple) {
    this.couplesService.decline(couple.id).subscribe(result=>{
      this.ngOnInit();
      console.log(result);
    });
  }
}
