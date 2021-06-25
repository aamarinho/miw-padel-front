import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../shared/dialogs/confirmation-dialog/confirmation-dialog.component";
import {PaddleCourtService} from "./paddle-court.service";
import {PaddleCourt} from "../../shared/models/paddlecourt.model";
import {AddUpdatePaddleCourtComponent} from "./add-update-paddle-court/add-update-paddle-court.component";

@Component({
  selector: 'app-paddle-courts',
  templateUrl: './paddle-courts.component.html'
})
export class PaddleCourtsComponent implements OnInit {

  displayedColumns: string[];
  dataSource: PaddleCourt[];
  dialogRef!: MatDialogRef<ConfirmationDialogComponent> | null;

  constructor(private paddleCourtService: PaddleCourtService, private dialog: MatDialog) {
    this.displayedColumns = ['name','paddleCourtType','disabled','update','delete'];
    this.dataSource = new Array<PaddleCourt>();
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
      maxWidth:'700px',
      data: {
        add: false,
        data: row
      }
    }).afterClosed().subscribe(()=> this.ngOnInit());
  }

  delete(row: PaddleCourt): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: "Are you sure you want to delete?"
    });

    this.dialogRef.afterClosed().subscribe(result=> {
      if(result)
        this.paddleCourtService.delete(row.name).subscribe(()=> this.ngOnInit());
    });
  }

}
