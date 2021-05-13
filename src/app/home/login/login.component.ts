import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../core/auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  form!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private dialog: MatDialog) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(5), Validators.maxLength(14)])
    });
  }

  login(): void {
    this.authService.login(this.form.get('email')?.value,this.form.get('password')?.value).subscribe(()=> {
        this.dialog.closeAll();
      }
    );
  }

  get getFormControl(){
    return this.form.controls;
  }

  //getFormValue
}
