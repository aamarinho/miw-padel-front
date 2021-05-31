import {Component, OnInit} from '@angular/core';
import {CouplesService} from "../couples.service";
import {Couple} from "../../../shared/models/couple.model";

@Component({
  selector: 'app-pending-couple-requests-dialog',
  templateUrl: './pending-couple-requests-dialog.component.html',
  styleUrls: ['./pending-couple-requests-dialog.component.css']
})
export class PendingCoupleRequestsDialogComponent implements OnInit {

  couples: Couple[];

  constructor(private couplesService: CouplesService) {
    this.couples = new Array<Couple>();
  }

  ngOnInit(): void {
    this.couplesService.getPending().subscribe(result=>{
      this.couples = result;
    });
  }

  accept(couple: Couple) {
    this.couplesService.accept(couple).subscribe(result=>{
      this.ngOnInit();
      console.log(result);
    });
  }

  decline(couple: Couple) {
    this.couplesService.decline(couple).subscribe(result=>{
      this.ngOnInit();
      console.log(result);
    });
  }
}
