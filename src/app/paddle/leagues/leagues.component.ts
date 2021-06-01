import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LeaguesService} from "./leagues.service";
import {League} from "../../shared/models/league.model";
import {Couple} from "../../shared/models/couple.model";
import {CouplesLeagueComponent} from "./couples-league/couples-league.component";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  displayedColumns: string[];
  dataSource:League[];

  constructor(private leaguesService: LeaguesService, private dialog: MatDialog) {
    this.dataSource = new Array<League>();
    this.displayedColumns = ['name','gender','maxCouples','initDate','endDate','couples'];
  }

  ngOnInit(): void {
    this.leaguesService.get().subscribe(result=>{
      this.dataSource = result;
    });
  }

  openCouples(couples: Couple[]) {
    this.dialog.open(CouplesLeagueComponent,{
      data: {
        data: couples
      }

    }).afterClosed().subscribe(result=>console.log(result));
  }
}
