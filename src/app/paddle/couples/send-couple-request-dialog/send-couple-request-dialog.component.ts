import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CouplesService} from "../couples.service";
import {EmailDto} from "../../../shared/models/emaildto.model";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-send-couple-request-dialog',
  templateUrl: './send-couple-request-dialog.component.html'
})
export class SendCoupleRequestDialogComponent implements OnInit {

  form!: FormGroup;
  email: string;

  constructor(private fb: FormBuilder,
              private couplesService: CouplesService,
              private dialogRef: MatDialogRef<SendCoupleRequestDialogComponent>) {
    this.email = '';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(this.email, [Validators.required, Validators.email])
    });
  }

  submit(): void {
    let emailDto: EmailDto = { email: this.form.get('email')?.value };
    this.couplesService.create(emailDto).subscribe(()=>this.dialogRef.close());
  }

  get getFormControl(){
    return this.form.controls;
  }

}
