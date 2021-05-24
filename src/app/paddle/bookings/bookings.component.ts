import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {BookingsService} from "./bookings.service";
import {AuthService} from "../../core/auth.service";
import {BookingDto} from "../../shared/models/bookingdto.model";
import {CommonMethods} from "../../shared/common-methods";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../shared/dialogs/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  displayedColumns: string[];
  dataSource:any;
  dialogRef!: MatDialogRef<ConfirmationDialogComponent> | null;
  title: string;

  constructor(private bookingsService: BookingsService, private authService: AuthService, public dialog: MatDialog) {
    if(this.authService.isAdmin()){
      this.displayedColumns = ['user', 'paddleCourt', 'timeRange', 'cancel'];
      this.title = 'BOOKINGS';
    } else{
      this.displayedColumns = ['user', 'paddleCourt', 'date', 'timeRange', 'cancel'];
      this.title = 'MY BOOKINGS';
    }
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    if(!this.authService.isAdmin()){
      this.getBookingByDate();
    } else{
      this.getBookingByDate(CommonMethods.getTodayDate());
    }
  }

  delete(booking: BookingDto): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?";

    this.dialogRef.afterClosed().subscribe(result=> {
      if(result){
            this.bookingsService.delete(booking.id).subscribe(()=>{
            if(this.authService.isAdmin()) {
              this.getBookingByDate(booking.date.toString());
            } else
              this.ngOnInit();
        }, error=>{
          console.log(error);
        });
      }
      this.dialogRef = null;
    });
  }

  getBookingByDate(date?: string) {
    this.bookingsService.get(date).subscribe(result=>{
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    } );
  }

}
