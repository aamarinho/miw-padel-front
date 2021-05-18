import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {BookingsService} from "./bookings.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  displayedColumns: string[] = ['user', 'paddleCourt', 'date', 'timeRange'];
  dataSource:any;

  constructor(private bookingsService: BookingsService) {
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
  }

  addItem(date: any) {
    this.bookingsService.get(date).subscribe(result=>{
      console.log("BIEN");
      console.log(result);
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    } );
  }

}
