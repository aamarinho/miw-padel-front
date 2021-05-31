import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../shared/dialogs/confirmation-dialog/confirmation-dialog.component";
import {LeaguesService} from "./leagues.service";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  displayedColumns: string[];
  dataSource:any;
  dialogRef!: MatDialogRef<ConfirmationDialogComponent> | null;

  constructor(private leaguesService: LeaguesService) {
    this.displayedColumns = ['name','gender','couples','maxCouples','initDate','endDate'];
  }

  ngOnInit(): void {
    this.leaguesService.get().subscribe(result=>{
      console.log(result);
      this.dataSource = result;
    });
  }

}
