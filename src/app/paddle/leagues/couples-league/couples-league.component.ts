import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Couple} from "../../../shared/models/couple.model";
import {ProfileService} from "../../../shared/services/profile.service";

@Component({
  selector: 'app-couples-league',
  templateUrl: './couples-league.component.html'
})
export class CouplesLeagueComponent implements OnInit{

  couples: Couple[];

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private profileService: ProfileService) {
    this.couples = data.data;
  }

  ngOnInit() {
    this.couples.forEach(couple => {
      couple.captainImage = couple.playerImage = "../../../assets/images/default.png";
      this.profileService.getCaptainImageAndPut(couple);
      this.profileService.getPlayerImageAndPut(couple);
    });
  }

}
