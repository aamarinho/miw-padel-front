import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { BookingsService } from "./bookings.service";
import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  displayedColumns: string[];
  dataSource:any;

  constructor(private bookingsService: BookingsService, private authService: AuthService) {
    if(this.authService.isAdmin()){
      this.displayedColumns = ['user', 'paddleCourt', 'timeRange'];
    } else{
      this.displayedColumns = ['user', 'paddleCourt', 'date', 'timeRange'];
    }
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    if(!this.authService.isAdmin()){
      this.bookingsService.get().subscribe(result=>{
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
      });
    } else{
      this.bookingsService.get(this.getTodayDate()).subscribe(result=>{
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
      });
    }
  }

  getBookingByDate(date: any) {
    this.bookingsService.get(date).subscribe(result=>{
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    } );
  }

  getTodayDate(): string{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }

}
