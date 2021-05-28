import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-send-couple-request-dialog',
  templateUrl: './send-couple-request-dialog.component.html',
  styleUrls: ['./send-couple-request-dialog.component.css']
})
export class SendCoupleRequestDialogComponent implements OnInit {

  form!: FormGroup;
  email: string;

  constructor(private fb: FormBuilder) {
    this.email = '';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(this.email, [Validators.required, Validators.email])
    });
  }

  submit(): void{
    console.log(this.form.get('email')?.value);
  }

  get getFormControl(){
    return this.form.controls;
  }

}
