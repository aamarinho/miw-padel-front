import {Component, OnInit} from '@angular/core';
import {Couple} from "../../shared/models/couple.model";
import {faTransgender, faVenus, faMars} from '@fortawesome/free-solid-svg-icons';
import {CouplesService} from "./couples.service";
import {MatDialog} from "@angular/material/dialog";
import {PendingCoupleRequestsDialogComponent} from "./pending-couple-requests-dialog/pending-couple-requests-dialog.component";
import {SendCoupleRequestDialogComponent} from "./send-couple-request-dialog/send-couple-request-dialog.component";

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

  constructor(private couplesService: CouplesService, private dialog: MatDialog) {
    this.couples = new Array<Couple>();
  }

  ngOnInit(): void {
    this.couplesService.getConsolidate().subscribe(result=>{
      this.couples = result;
    });
  }

  openPendingCoupleRequests() {
    this.dialog.open(PendingCoupleRequestsDialogComponent)
      .afterClosed().subscribe(()=>{
        this.ngOnInit();
        console.log("Close pending couple requests");
    });
  }

  openSendCoupleRequest() {
    this.dialog.open(SendCoupleRequestDialogComponent)
      .afterClosed().subscribe(()=>{
        this.ngOnInit();
        console.log("Close send couple request");
    });
  }
}
