import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../shared/dialogs/confirmation-dialog/confirmation-dialog.component";
import {PaddleCourtService} from "./paddle-court.service";
import {PaddleCourt} from "../../shared/models/paddlecourt.model";
import {AddUpdatePaddleCourtComponent} from "./add-update-paddle-court/add-update-paddle-court.component";

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
    this.displayedColumns = ['name','paddleCourtType','disabled','update','delete'];
  }

  ngOnInit(): void {
    this.paddleCourtService.get().subscribe(result=>{
      this.dataSource = result;
    });
  }

  openAddPaddleCourt(): void {
    this.dialog.open(AddUpdatePaddleCourtComponent,{
      maxWidth:'700px',
      data:{
        add: true,
        data: {}
      }
    }).afterClosed().subscribe(()=> this.ngOnInit());
  }

  openUpdatePaddleCourt(row: PaddleCourt): void{
    this.dialog.open(AddUpdatePaddleCourtComponent, {
      data: {
        add: false,
        data: row
      }
    }).afterClosed().subscribe(()=>this.ngOnInit());
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
