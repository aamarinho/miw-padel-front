import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Couple} from "../../../shared/models/couple.model";

@Component({
  selector: 'app-couples-league',
  templateUrl: './couples-league.component.html',
  styleUrls: ['./couples-league.component.css']
})
export class CouplesLeagueComponent {

  couples: Couple[];

  constructor(@Inject(MAT_DIALOG_DATA) data: Couple[]) {
    this.couples = data ? data : {} as Couple[];
  }

}
