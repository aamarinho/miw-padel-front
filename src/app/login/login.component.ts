import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  form!: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder) {
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
    console.log("peticion");
    //console.log(this.form.get('email')?.value+ ' + ' + this.form.get('password')?.value);
    this.loginService.login(this.form.get('email')?.value,this.form.get('password')?.value).subscribe(result=>{
      console.log(result);
    },error => {
      console.log(error);
    });
  }

  get getFormControl(){
    return this.form.controls;
  }
}
