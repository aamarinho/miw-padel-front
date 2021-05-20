import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { BookingsService } from "./bookings.service";
import { AuthService } from "../../core/auth.service";
import { BookingDto } from "../../shared/models/bookingdto.model";

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
      this.displayedColumns = ['user', 'paddleCourt', 'timeRange', 'cancel'];
    } else{
      this.displayedColumns = ['user', 'paddleCourt', 'date', 'timeRange', 'cancel'];
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

  getBookingByDate(date: string) {
    this.bookingsService.get(date).subscribe(result=>{
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    } );
  }

  delete(row: BookingDto): void {
    this.bookingsService.delete(row.id).subscribe(result=>{
      console.log(result);
      const index = this.dataSource.data.indexOf(row.id);
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }, error=>{
      console.log(error);
    });
  }

  getTodayDate(): string{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }
}
