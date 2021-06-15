import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LeaguesService} from "./leagues.service";
import {League} from "../../shared/models/league.model";
import {Couple} from "../../shared/models/couple.model";
import {CouplesLeagueComponent} from "./couples-league/couples-league.component";
import {AddLeagueComponent} from "./add-league/add-league.component";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html'
})
export class LeaguesComponent implements OnInit {

  displayedColumns: string[];
  dataSource: League[];

  constructor(private leaguesService: LeaguesService, private dialog: MatDialog, private authService: AuthService) {

    if(this.isAdmin()) {
      this.displayedColumns = ['name','gender','maxCouples','startDate','endDate','couples'];
    } else{
      this.displayedColumns = ['name','gender','maxCouples','startDate','endDate','signUp'];
    }
    this.dataSource = new Array<League>();
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

  openAddLeague() {
    this.dialog.open(AddLeagueComponent).afterClosed().subscribe(()=>this.ngOnInit());
  }

  isAdmin(): boolean{
    return this.authService.isAdmin();
  }

}
