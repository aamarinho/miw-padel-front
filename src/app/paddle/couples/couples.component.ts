import {Component, OnInit} from '@angular/core';
import {Couple} from "../../shared/models/couple.model";
import {faMars, faTransgender, faVenus} from '@fortawesome/free-solid-svg-icons';
import {CouplesService} from "./couples.service";
import {MatDialog} from "@angular/material/dialog";
import {PendingCoupleRequestsDialogComponent} from "./pending-couple-requests-dialog/pending-couple-requests-dialog.component";
import {SendCoupleRequestDialogComponent} from "./send-couple-request-dialog/send-couple-request-dialog.component";
import {CoupleState} from "../../shared/models/couplestate.model";
import {ProfileService} from "../profile/profile.service";
import {Common} from "../../shared/common";

@Component({
  selector: 'app-couples',
  templateUrl: './couples.component.html',
  styleUrls: ['./couples.component.css']
})
export class CouplesComponent implements OnInit {

  couples: Couple[];
  faTransgender = faTransgender;
  faVenus = faVenus;
  faMars = faMars;

  constructor(private couplesService: CouplesService, private dialog: MatDialog, private profileService: ProfileService) {
    this.couples = new Array<Couple>();
  }

  ngOnInit(): void {
    this.couplesService.get().subscribe(result=>{
      this.couples = result;
      this.couples = this.couples.filter(couple=>couple.coupleState==CoupleState.CONSOLIDATED)
      this.couples.forEach(couple => {
        couple.captainImage = couple.playerImage = "../../../assets/images/default.png";
        Common.getCaptainImageAndPut(this.profileService,couple);
        Common.getPlayerImageAndPut(this.profileService,couple);
      });
    });
  }

  openPendingCoupleRequests() {
    this.dialog.open(PendingCoupleRequestsDialogComponent).afterClosed().subscribe(()=> this.ngOnInit());
  }

  openSendCoupleRequest() {
    this.dialog.open(SendCoupleRequestDialogComponent).afterClosed().subscribe();
  }
}
