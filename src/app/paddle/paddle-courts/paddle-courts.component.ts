import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../shared/dialogs/confirmation-dialog/confirmation-dialog.component";
import {PaddleCourtService} from "./paddle-court.service";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {PaddleCourt} from "../../shared/models/paddlecourt.model";
import {AddPaddleCourtComponent} from "./add-paddle-court/add-paddle-court.component";

@Component({
  selector: 'app-paddle-courts',
  templateUrl: './paddle-courts.component.html',
  styleUrls: ['./paddle-courts.component.css']
})
export class PaddleCourtsComponent implements OnInit {


  displayedColumns: string[];
  dataSource:any;
  dialogRef!: MatDialogRef<ConfirmationDialogComponent> | null;

  constructor(private paddleCourtService: PaddleCourtService,
              private dialog: MatDialog) {
    this.displayedColumns = ['name','paddleCourtType','disabled','delete'];
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.paddleCourtService.get().subscribe(result=>{
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    });
  }

  openAddPaddleCourt(): void {
    this.dialog.open(AddPaddleCourtComponent,{
      maxWidth:'700px'
    }).afterClosed().subscribe(()=> this.ngOnInit());
  }

  delete(row: PaddleCourt): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?";

    this.dialogRef.afterClosed().subscribe(result=> {
      if(result){
        this.paddleCourtService.delete(row.name).subscribe(()=>{
          this.ngOnInit();
        });
      }
      this.dialogRef = null;
    });
  }

}
