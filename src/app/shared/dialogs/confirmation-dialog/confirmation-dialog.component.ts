import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {

  public confirmMessage: string;

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    this.confirmMessage = '';
  }

}
